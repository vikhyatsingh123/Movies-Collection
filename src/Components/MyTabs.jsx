import React from 'react';
import { Tabs } from 'antd';

import Hollywood from './Movie/Hollywood';
import Bollywood from './Movie/Bollywood';
import Tollywood from './Movie/Tollywood';
import HollywoodWeb from './Web-Series/HollywoodWeb';
import BollywoodWeb from './Web-Series/BollywoodWeb';

const { TabPane } = Tabs;

const items = [
  {
    key: "1",
    label: "Movies",
    children: [
      {
        key: "1-1",
        label: "Hollywood",
        content: <Hollywood />,
      },
      {
        key: "1-2",
        label: "Bollywood",
        content: <Bollywood />,
      },
      {
        key: "1-3",
        label: "Tollywood",
        content: <Tollywood />,
      },
    ],
  },
  {
    key: "2",
    label: "Web Series",
    children: [
      {
        key: "2-1",
        label: "Hollywood",
        content: <HollywoodWeb />,
      },
      {
        key: "2-2",
        label: "Bollywood",
        content: <BollywoodWeb />,
      },
    ],
  },
];

const MyTabs = () => {
 

  return (
 
        <Tabs defaultActiveKey="1" type="card" className='px-3'>
            {items.map((item) => (
              <TabPane tab={item.label} key={item.key}>
                <Tabs defaultActiveKey="1-1" type="card">
                  {item.children.map((childItem) => (
                    <TabPane className='container' tab={childItem.label} key={childItem.key}>
                      {childItem.content}
                    </TabPane>
                  ))}
                </Tabs>
              </TabPane>
            ))}
          </Tabs>
  
  );
};

export default MyTabs;

