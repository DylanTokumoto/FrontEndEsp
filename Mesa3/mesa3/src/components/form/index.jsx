import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import getCursos from "../../requests/cursos";
import { editarAluno, saveAluno } from "../../requests/aluno";

export default function Form(props) {
  const queryClient = useQueryClient();

  const { formData, setFormData, clearState } = props;

  const { data, isFetching } = useQuery(["@cursos"], getCursos, {
    refetchOnWindowFocus: false,
  });

  const { mutate, error } = useMutation(saveAluno, {
    onSuccess: () => {
      alert("salvo com sucesso");
      queryClient.invalidateQueries(["@alunos"]);
    },
    onError: () => alert("Erro ao salvar dados"),
  });

  const { mutate: editMutate } = useMutation(editarAluno, {
    onSuccess: () => {
      alert("editado com sucesso");
      queryClient.invalidateQueries(["@alunos"]);
    },
    onError: () => alert("Erro ao salvar dados"),
  });

  function edit() {
    editMutate({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  function save() {
    mutate({
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  if (error) {
    return <h3>Erro ao salvar aluno...</h3>;
  }

  if (isFetching) {
    return <h2>carregando...</h2>;
  }

  return (
    <div className="p-4 bg-blue-950 flex space-x-4 justify-center">
      <input
        className="border border-gray-500 p-1"
        placeholder="Nome"
        value={formData.nome}
        onChange={(event) =>
          setFormData({ ...formData, nome: event.target.value })
        }
      />
      <input
        className="border border-gray-500 p-1"
        placeholder="Matricula"
        value={formData.matricula}
        onChange={(event) =>
          setFormData({ ...formData, matricula: event.target.value })
        }
      />

      <select
        value={formData.curso}
        className="border border-gray-500 p-1"
        defaultValue={formData.curso}
        onChange={(event) =>
          setFormData({ ...formData, curso: event.target.value })
        }
      >
        <option hidden>Selecione um curso</option>
        {data.cursos.map((curso, idx) => (
          <option key={idx}>{curso.name}</option>
        ))}
      </select>
      <input
        className="border border-gray-500 p-1"
        placeholder="Bimestre"
        value={formData.bimestre}
        onChange={(event) =>
          setFormData({ ...formData, bimestre: event.target.value })
        }
      />
      <button onClick={formData.id ? edit : save} className="bg-green-700 text-white p-1">Salvar</button>
    </div>
  );
}