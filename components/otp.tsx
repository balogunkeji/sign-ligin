import React, { useRef, useState } from 'react'
import styled from 'styled-components/native'
// import { theme } from 'theme'

type Props = {
  code: string
  setCode: (c: string) => void
  length?: number
  submitfunc?: any
}

export const OTPInput = ({ submitfunc, code, setCode, length = 4 }: Props) => {
  const boxArray = new Array(length).fill(0)
  const inputRef = useRef<any>()

  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false)

  const handleOnPress = () => {
    setIsInputBoxFocused(true)
    inputRef.current.focus()
  }

  const handleOnBlur = () => {
    setIsInputBoxFocused(false)
  }

  // useEffect(() => {
  //   // update pin ready status
  //   setIsPinReady(code.length === length)

  //   return () => setIsPinReady(false)
  // }, [code])

  const boxDigit = (_: any, index: any) => {
    const emptyInput = ''
    const digit = code[index] || emptyInput

    const isCurrentValue = index === code.length
    const isLastValue = index === length - 1
    const isCodeComplete = code.length === length

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete)

    const StyledSplitBoxes =
      isInputBoxFocused && isValueFocused ? SplitBoxesFocused : SplitBoxes
    return (
      <StyledSplitBoxes key={index}>
        <SplitBoxText>{digit}</SplitBoxText>
      </StyledSplitBoxes>
    )
  }

  return (
    <OTPInputContainer>
      <SplitOTPBoxesContainer onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </SplitOTPBoxesContainer>
      <TextInputHidden
        value={code}
        onChangeText={setCode}
        maxLength={length}
        ref={inputRef}
        onBlur={handleOnBlur}
        keyboardType="numeric"
        onSubmitEditing={() => submitfunc?.()}
      />
    </OTPInputContainer>
  )
}

export const OTPInputContainer = styled.View`
  justify-content: flex-start;
  align-items: center;
`

export const TextInputHidden = styled.TextInput`
  position: absolute;
  opacity: 0;
`

export const SplitOTPBoxesContainer = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  padding-horizontal: 14px;
`

export const SplitBoxes = styled.View`
  background-color: #000;
  border-radius: 8px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`

export const SplitBoxText = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #fff;
  font-size: 36px;
  font-style: normal;
font-weight: 800;
`

export const SplitBoxesFocused = styled(SplitBoxes)`
  border-color: black;
`

export const ButtonContainer = styled.TouchableOpacity`
  background-color: #000000;
  padding: 20px;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 30px;
`

export const ButtonText = styled.Text`
  color: black;
  font-size: 20px;
`