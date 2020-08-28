import React, { Component } from 'react';
import './App.css';
import TextSelection from 'text-selection-react'
import {search} from 'search-tree-child'
import {createPdf} from 'create-pdf'

console.log(search)

console.log('createpdf --->>>---', createPdf)
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedText : []
    }
  }

  toggleCollectionModal = (text) =>  {
    console.log('text ----', text)
    const selectedText = this.state.selectedText
    selectedText.push(text)
    this.setState({
      selectedText
    })
  }
  render() {
    console.log('-----', JSON.stringify(search(tree, 'node', ["name","text"], ["tree", "node"], true)))
    return (
      <div className="App" id="pdf">
        <header className="App-header">
        <input type="button" onClick={() => createPdf("pdf")}  value="create pdf"/>
        <div style={{width: '100%', background: 'white', color: 'black'}}>
        {/* { this.state.selectedText.length && (
          this.state.selectedText.map(text => {
            return <p> {text} </p>
          })
        )} */}
        </div>
          <p>Abinav Lea kasdjkfalsdjfk kasjdf aklsjdf ja s;dfkjasdl fjas dfaksjdfjaskdjfkljsdklfjklsjalfjkasjdfkljaksdlfdfasjdlkfjlasdf
            adsfaksdjfjasjdfjasdfa
            sdfjkasdjf jalsdjkfjlkasdjfkjsakldjfkljasdfa
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
        </header>

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
        </header>
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
        </header>
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

        </header><header className="App-header">
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

        </header>
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

        </header>
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

        </header>
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

        </header>
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
            unmark={true}
            unmarkText="Remove"
            events={[
              {
                text: 'Submit',
                handler: (html, text) => this.toggleCollectionModal(text) 
                
              },
              {
                text: 'facebook',
                handler: (html, text) => {
                  console.log('text ----', text)
                  console.log('html ----', html)
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


const tree = [{
  "name": "abhinav",
  "text": "asdf",
  "node" : [
      {"name": "arjun"},
      {"name": "ankur"}
    ],
  "tree": [
      {"name": "arjun", "text": "nujra"},
      {"name": "ankur", "text": "rukna"},
      {
          "name": "ankit",
          "text": "tikna",
          "tree": [
              {"name": "akshay"},
              {"name": "jainnode"}
          ]
      },{"name": "abhay",
       "tree": [
          {"name": "akshit"},
          {"name": "pratyush"},
          {
            "name": "uday",
            "tree": [
                {"name": "amit",
                  "node": [{ "text": "nodesearch"}]
                },
                {"name": "akilesh",
                  "text": "asdf",
                  "tree" : [{ "name": "search"}]
                }
            ]
          }
        ]
      }
    ]
},
{
  "name": "neeraj",
  "tree": [
      {"name": "bana"}
  ]
}
]
