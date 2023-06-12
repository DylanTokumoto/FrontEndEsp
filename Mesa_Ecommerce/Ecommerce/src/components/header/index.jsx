export default function Header(){
    return(
        <>
        <div className="bg-primary flex justify-between p-5">
            <h1 className="font-bold">DHProducts</h1>
            <ul className="flex justify-around min-w-[20%]">
                <li className="font-extralight">Produtos</li>
                <li className="font-extralight">Quem somos</li>
                <li className="font-extralight">Sair</li>
            </ul>
        </div>
        </>
    )
}