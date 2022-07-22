import styled from 'styled-components';
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs';

/* W.Tabs */
export const WrapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 100%;
  margin-top: 16px;

`;

/* W.TabList */
export const WrapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;
WrapperTabList.tabsRole = "Tablist";

/* W.Tab */
export const WrapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #ccc;
  padding: 8px;
  user-select: none;
  cursor: pointer;  
  z-index: 99999;
  background-color: "#fff";
  margin: 8px;

  &:focus{
    outline: none;
  }

  &.is-selected{
    
    box-shadow: 8px 3px 15px black;
  }
  
`;
WrapperTab.tabsRole = "Tab";


/* W.TabPanel */
export const WrapperTabPanel = styled(TabPanel)`
    padding: 16px;
    border: 1px solid "#ccc";    
    display: none;
    border-radius: 3px;

    &.is-selected{
    display: block;
  }
  
`;
WrapperTabPanel.tabsRole = "TabPanel";