import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Form() {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        date: "",
        description: "",
    });
    return (
        <div className="flex flex-col h-[70vh] w-[70%] bg-white rounded-xl justify-center items-center gap-10">
            <h1 className="font-bold">Cadastrar Tarefa</h1>
            <input
                className="border-b-2 min-w-[70%] p-1"
                value={formData.title}
                type="text"
                placeholder="Título"
                onChange={(event => setFormData({ ...formData, title: event.target.value }))}></input>
            <select
                className="border-b-2 min-w-[70%] p-1"
                value={formData.category}
                name="Categoria"
                onChange={(event => setFormData({ ...formData, category: event.target.value }))}>
                <option hidden >Categoria</option>
                <option value="Trabalho" >Trabalho</option>
                <option value="Lazer">Lazer</option>
                <option value="Outros">Outros</option>
            </select>
            <input
                className="border-b-2 min-w-[70%] p-1"
                value={formData.date}
                type="date"
                placeholder="Data"
                onChange={(event => setFormData({ ...formData, date: event.target.value }))}></input>
            <input
                className="border-b-2 min-w-[70%] p-1"
                value={formData.description}
                type="text"
                placeholder="Descrição"
                onChange={(event => setFormData({ ...formData, description: event.target.value }))}></input>

            <button
                className="bg-green-600 text-white p-2 min-w-[40%] rounded-md"
                onClick={(e) => dispatch({ type: "ADD_TASK", payload: { task: formData } })}
            >Salvar</button>
        </div>
    )
}