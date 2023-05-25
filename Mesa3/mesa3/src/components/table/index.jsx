import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import getAlunos from "../../requests/aluno";
import { removerAluno } from "../../requests/aluno";
import { toast } from "react-toastify";

export default function Table(props) {
  const queryClient = useQueryClient();
  const { formData, setFormData } = props;

  const { data, isFetching } = useQuery(["@alunos"], getAlunos, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(removerAluno, {
    onSuccess: () => {
      queryClient.invalidateQueries(["@alunos"]);
      toast.success("Apagado com sucesso!");
    },
    onError: () => {
      toast.error("Erro ao apagar aluno");
    },
  });

  if (isFetching) {
    return <h3>Buscando alunos!</h3>;
  }

  function apagarAluno(id) {
    mutate(id);
  }

  function preencherCampos(aluno) {
    setFormData({ ...aluno, id: aluno._id });
  }

  return (
    <div>
      <h1>Minha table</h1>

      <table className="min-w-full">
        <thead>
          <tr>
            <th className="py-2 px-4 font-semibold text-center">Ordem</th>
            <th className="py-2 px-4 font-semibold text-left">Nome</th>
            <th className="py-2 px-4 font-semibold text-center">Mátrícula</th>
            <th className="py-2 px-4 font-semibold text-left">Curso</th>
            <th className="py-2 px-4 font-semibold text-center">Bimestre</th>
            <th className="py-2 px-4 font-semibold text-left">Ações</th>
          </tr>
        </thead>
        <tbody>
          { data.map((aluno, index) => (
            <tr className="border-b border-b-red">
            <td className="text-center">{index + 1}</td>
          <td>{aluno.nome}</td>
          <td className="text-center">{aluno.matricula}</td>
          <td>{aluno.curso}</td>
          <td className="text-center">{aluno.bimestre}</td>
          <td className="flex space-x-3">
          <button className="bg-green-700 text-white text-sm p-2" onClick={() => preencherCampos(aluno)}>Editar</button>
          <button className="bg-red-700 text-white text-sm p-2" onClick={() => apagarAluno(aluno._id)}>Excluir</button>
          </td>
          </tr>
          ))
          }
          
        </tbody>
      </table>
    </div>
  );
}