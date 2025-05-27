export default function Tabs({children,buttons,ButtonsContainer = 'menu'}){
    //Krijo nje variable qe e run vleren e prop -> buttonContainer
    // const ButtonContainer = buttonContainer;
    return(
        <>
            <ButtonsContainer>{buttons} </ButtonsContainer>
            {children}
        </>
            
        
    )


}