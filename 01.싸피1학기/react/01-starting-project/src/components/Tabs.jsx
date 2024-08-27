function Tabs({ children, buttons, buttonContainer = 'menu' }) {
    // 첫 글자 대문자 필수
    const ButtonContainer = buttonContainer

    return (
        <>
          <ButtonContainer>{buttons}</ButtonContainer>
          {children}
        </>
    )
}

export default Tabs;