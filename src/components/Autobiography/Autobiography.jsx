import React from 'react';
import './styles.scss';
import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

export default function Autobiography(props) {
    const title = props.title;
    return (
        <div id='autobiography' className='autobiography-wrapper'>
            <Content>
                <Title className='title'>{title}</Title>
                <p className='content'>我叫吳建穎，畢業於國立東華大學應用數學系。個人特質屬於樂於學習、學習力強、努力且肯負責。
                </p>
                <p className='content'>
                    第一份工作在元智大學擔任技術人員，工作內容主要是備份、資訊系統整合與維護以及各單位處理連線相關作業及問題排除
                </p>
                <p className='content'>
                    第二份工作在威納科技擔任PHP工程師。工作內容主要是開發與維護Case專案以及公司自家產品。接觸到的包含開發Api、串接其他ERP系統、網頁報表的顯示及匯出。
                </p>
                <p className='content'>
目前就職仁寶電腦，主要負責開發與維護前後端，
在前端方面，使用React及Angular框架開發，並且使用到了websocket串接、chart套件、匯出pdf套件以及利用electron來建立桌面應用程式。
在後端方面上，使用PHP以及Node.js，PHP使用的是codeigniter搭配mysql運用在雲端上的API，Node.js則是使用在地端開發API且與韌體進行傳輸資料。
也在系統上進行很多的操作，例如在ubuntu撰寫script，讓程式可以進行OTA的動作。
在App方面上，也有開發Android App，自行獨立從無到有，其中包含串接API、顯示資料、存取DB以及使用BLE連接其他裝置。
在工作上也會與其他部門或同部門其他人進行溝通及合作。

未來規畫是希望自己可以更專精前後端、並且有機會也可學習更多其他語言、撰寫各類別的產業。</p>
            </Content>
        </div>
    );
}