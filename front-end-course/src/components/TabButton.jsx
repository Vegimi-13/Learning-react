export default function TabButton({children, onSelect}){
    // function handleClick(){
    //     console.log('Hello World')
    // }

    return (
    <li>
        <button onClick={onSelect}>{children}</button>
    </li>
    );
}




//props.children
//e referon kontentin brenda element tags
//every custom react component will accept props