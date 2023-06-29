import { Tag } from "antd";
export const backendData = [
    {
      title: <span style={{fontWeight: 'bold'}}>Backend</span>,
      key: '0-0',
      children: [
        {
          title: <Tag color="processing" className='tag'>PHP</Tag>,
          key: '0-0-0',
        },
        {
          title: <Tag color="processing" className='tag'>Node.js</Tag>,
          key: '0-0-1',
        },
        {
            title: <Tag color="processing" className='tag'>Python</Tag>,
            key: '0-0-2',
        },
        {
            title: <Tag color="processing" className='tag'>Android/java</Tag>,
            key: '0-0-3',
        },
      ],
    }
];

export const fontendData = [{
    title: <span style={{fontWeight: 'bold'}}>Fontend</span>,
    key: '0-1',
    children: [
        {
            title: <Tag color="magenta" className='tag'>HTML</Tag>,
            key: '0-1-0',
        },
        {
            title: <Tag color="magenta" className='tag'>CSS</Tag>,
            key: '0-1-1',
        },
        {
            title: <Tag color="magenta" className='tag'>Javascript</Tag>,
            key: '0-1-2',
        },
        {
            title: <Tag color="magenta" className='tag'>React</Tag>,
            key: '0-1-3',
        },
        {
            title: <Tag color="magenta" className='tag'>Angular</Tag>,
            key: '0-1-4',
        },
    ],
}];

export const OtherData = [
    {
      title: <span style={{fontWeight: 'bold'}}>Other</span>,
      key: '0-0',
      children: [
        {
          title: <Tag color="success" className='tag'>MySQL</Tag>,
          key: '0-0-0',
        },
        {
          title: <Tag color="success" className='tag'>MongoDB</Tag>,
          key: '0-0-1',
        },
        {
            title: <Tag color="gold" className='tag'>git</Tag>,
            key: '0-0-2',
        },
        {
            title: <Tag color="orange" className='tag'>Ubuntu</Tag>,
            key: '0-0-3',
        },
        {
            title: <Tag color="orange" className='tag'>Windows</Tag>,
            key: '0-0-4',
        },
      ],
    }
];