import Card from "../components/card";
import Header from "../components/header";

export default function Home(){
    return(
        <>
        <Header />
        <div className="flex-wrap">
            <ul>
            </ul>
            <Card />
        </div>
        </>
    )
}