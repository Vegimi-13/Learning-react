export default function Tabs({children,buttons,buttonContainer}){
    //Krijo nje variable qe e run vleren e prop -> buttonContainer
    const ButtonContainer = buttonContainer;
    return(
        <>
            <ButtonContainer>{buttons} </ButtonContainer>
            {children}
        </>
            
        
    )


}