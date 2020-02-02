import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextSelection from 'text-selection-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Lea kasdjkfalsdjfk kasjdf aklsjdf ja s;dfkjasdl fjas dfaksjdfjaskdjfkljsdklfjklsjalfjkasjdfkljaksdlfdfasjdlkfjlasdf
            adsfaksdjfjasjdfjasdfa
            sdfjkasdjfjalsdjkfjlkasdjfkjsakldjfkljasdfa
            sdfjaskljdfkjaskdjfkjaskldjfklajlksdjf;awleifjawioejfo;iasjfiojsaiojfiasjewifjoiawejfa

          </p>
          <p>Leakjsakdjfkajsd kajdklf aklsdklf jasjdfkj akldjkalsjdfja sj dfkljasdfa
            dskfj ak sjdklfjajsdfjkladsjfasdf
            asdjfkasldjfkjaskdjflja;gkljdfklj;aksjdfkljasdlkfjsjdfkljsdjflasjdfj
            asdjfjasdljfal;jsdklfjalsdjfklasjldfjlasdfas
            dfaksjdfjaskdjfkljsdklfjklsjalfjkasjdfkljaksdlf
          </p>
          <p>Leasadj ksadjflasdfjlkajeoifweiaio jfasjlksldf;asdkfjalsdkf 
            asdfjaksdfajs;dflajsdlfjadsf
            asdfjasdklflajsdklfa
            sdfjalsdfjlasdkjfkljadsklfjkasdjkfjldasfa 
            adkfjalksjdfkjskdjajf
          </p>
          <p>Leaj ksjdafjs  aklsjdfla;sdfklaj;l  aldsjfaj sdfkljalsjdklfj ajdsf jwioeuiruewiuriu dfkajsdf 
            aksdkfjklasdjlf adkfklasfkjakdghjkahkaslkdsjaiejowfj 
          </p>
          <p>kllkfsd' 'asd aljsdkjadjfk   jsdfkjaskldjfkljsdkl  adksjf asdkfj adjf klajdkfj 
          askdfjasjdklj a akdjfkjasd kjfksjd kjfkl sdklfja akdjf kaldfj lkajf'
          </p>
          <p>Learn Reacksajdkjaslkj kajsdkljKALJ LKDJALs ADSK LAsdkL;ASKDL;KAL;kf;l
              ADL;KAL;DKL;ASKD;LAskdl;kaSD Asd LAKDL';FLJASKLJF  tLea
         
          </p>
          <TextSelection
            events={[
            {
                text: 'Submit',
                handler: (text, html) => {
                  console.log('text ----', text)
                  console.log('html -----', html)
                }
               
            }
            ]}
            
            color={'purple'}
            colorText={true}
        />
        </header>
      </div>
    );
  }
}

export default App;
