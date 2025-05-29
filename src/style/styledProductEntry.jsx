import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  margin: 0 auto;
`;

export const Tabs = styled.div`
  display: flex;
  border-bottom: 2px solid #ccc;
  margin-bottom: 30px;
  font-size: 15px;
`;

export const Tab = styled.div`
  padding: 12px 20px;
  cursor: pointer;
  color: #888;
  font-size: 15px;
  border-bottom: 2px solid transparent;

  &.active {
    color: #000;
    border-bottom: 2px solid #000;
    font-weight: 500;
  }
  &:hover {
    color: #000;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 28px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 15px;
  color: #333;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 100%;
  padding: 13px 16px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #fff;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 13px 16px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: none;
  height: 100px;
  line-height: 1.6;

  &::placeholder {
    color: #aaa;
  }
`;

export const ImageUpload = styled.div`
  width: 180px;
  height: 180px;
  margin: 0 auto;
  background-color: #f6f6f6;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #999;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
`;

export const DescSmall = styled.div`
  text-align: center;
  font-size: 13px;
  color: #888;
  margin-top: 12px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    color: #333;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  input {
    flex: 1;
    padding: 13px 16px;
    font-size: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  span {
    font-size: 15px;
    color: #333;
  }
`;

export const SubmitButton = styled.button`
  background-color: #f4f4f4;
  color: #444;
  font-size: 15px;
  font-weight: 500;
  padding: 12px 32px;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 40px;
  display: inline-block;

  &:hover {
    background-color: #eaeaea;
  }

  &:active {
    background-color: #dedede;
  }
`;
