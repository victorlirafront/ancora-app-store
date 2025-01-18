import styled from 'styled-components';

export const StyledAside = styled.aside`
  background: #0f0f11;
  min-height: 100%;
  width: 300px;
  border-right: 1px solid #3d3d3d;
  color: #fff;
  position: relative;

  .aside-container {
    position: fixed;
    width: 300px;
  }

  .logo-wrapper {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 30px;
  }

  .catetory-text {
    padding: 0 47px;
    font-size: 14px;
    margin: 30px 0 20px 0;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  color: #333;
`;

export const StyledListItem = styled.li`
  margin: 0 auto;
  background-color: #14b04f;
  margin: 8px auto;
  padding: 15px 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  color: #fff;
  border: 1px solid #3d3d3d;
  border-radius: 40px;
  width: 250px;
  transition: 0.2s;
  color: #fff;
  font-weight: bolder;

  &:hover {
    border: 1px solid #0aa043;
    transform: scale(1.03);
    background: #0aa043;
  }
`;
