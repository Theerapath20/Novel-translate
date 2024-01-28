import React,{useState} from 'react'
import { Row, Col, Card, Popover, Spin, Carousel } from "antd";

// function
import {tran} from '../functions/tran'

function Story({text}) {

    

    const [wordTran,setWordTran] = useState(null)
    const [clickWord ,setClickWord] = useState(null)

    const [open, setOpen] = useState(false);
    const hide = () => {
      setWordTran(null)
      setOpen(false);
      setClickWord(null)
    };
    
    
    
    const words = text.split(" ")
        
     const handleClick = (word) =>{
              console.log(word);
              setWordTran(null)
              tran({word})
              .then((res) => {
                setWordTran(res.data[0].translations[0].text);
              }) 
              .catch((err) => console.log(err))
               setClickWord(word)
     };

    
     
      
   return (
    
       <Row>
         <Col span={24}>
           <Card className="card">
             <img
               src="https://online.anyflip.com/iovsi/ekiu/files/mobile/1.jpg?1626600465"
               style={{ width: "40%" }}
             />

             <div>
               {words.map((word, index) => {
                 return (
                   <React.Fragment key={index}>
                     {word === clickWord ? (
                       <>
                         <Popover
                           content={
                             wordTran === null ? (
                               <Spin />
                             ) : (
                               <>
                                 <p>{wordTran}</p>
                                 <a onClick={hide}>Close</a>
                               </>
                             )
                           }
                           title={clickWord}
                           trigger="click"
                           open={word === clickWord}
                           className="onclick"
                         >
                           <span onClick={() => handleClick(word, index)}>
                             {word}
                           </span>{" "}
                         </Popover>
                       </>
                     ) : (
                       <>
                         <span
                           className="click"
                           onClick={() => handleClick(word, index)}
                         >
                           {word}
                         </span>{" "}
                       </>
                     )}
                   </React.Fragment>
                 );
               })}
             </div>
           </Card>
         </Col>
       </Row>
     
   );
}

export default Story