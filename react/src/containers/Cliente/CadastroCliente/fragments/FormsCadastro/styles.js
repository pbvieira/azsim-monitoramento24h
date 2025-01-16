import styled from "styled-components";

export const Tabs = styled.div`
width: 100%;
    display: flex;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    min-height: 40px;

    ul{
        list-style: none;
        text-decoration: none;
        border-bottom: none;
        
         button{
        color: #000;
        }

    }
`;
export const TabButton = styled.button`
    padding: 10px 20px;
    background: ${({ active }) => (active ? "#f0f0f0" : "#fff")};
    border: none;
    border-bottom: ${({ active }) => (active ? "2px solid #000" : "none")};
    cursor: pointer;
    font-size: 16px;
    &:hover {
        background: #f9f9f9;
    }
`;

export const TabContent = styled.div`
    width: 100%;
    min-height: 90%;
    padding: 20px;
    background: #f7f7f7;
    border: 1px solid #ccc;
    border-radius: 4px;
`;