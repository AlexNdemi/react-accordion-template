import image1 from '../src/assets/images/anchor.webp';
import image2 from '../src/assets/images/boat.webp';
import image3 from '../src/assets/images/fishing.webp';
import image4 from '../src/assets/images/lighthouse.webp';
import image5 from '../src/assets/images/reef.webp';
import { Accordion } from "./components/accordion.jsx/accordion";
const IMAGES=[
  {
    url:image1,
    svgId:'boat',
    title:'Boating',
    desc:"Port mutiny draught handsomely ye furl flogging line shrouds hulk.Spirits Plate Fleet code of conduct.",
    alt:"A sailboat at sea during sunset"
  },
  {
    url:image2,
    svgId:'anchor',
    title:'Anchors',
    desc:"Ahoy league hands Sea Legs keelhaul salmagundi fire ship crimp Privateer galleon. Booty boom yard boatswain quarter.",
    alt:"closeup of a metal chain connected to a metal ring in the ground"
  },
  {
    url:image3,
    svgId:'fishing',
    title:'Fishing',
    desc:" No prey, no pay heave down splice the main brace furl cable snow walk the plank chase guns piracy bucko.",
    alt:"A person fishing in the ocean"
  },
  {url:image4,
    svgId:'lighthouse',
    title:'Lighthouses',
    desc:"Deadlights squiffy salmagundi cable pinnace parrel topsail Corsair Arr mizzenmast.",
    alt:"A white lighthouse with red top"
  },
  {url:image5,
    svgId:'coral',
    title:'Reefs',
    desc:"Keel yard poop deck brigantine gaff six pounders bring a spring upon her cable interloper lad pink.",
    alt:"reef outcropping with a lot of orange fish swimming around it."}
];
function App() {
  return (
    <>
     <Accordion IMAGES={IMAGES}/>
    </>
  )
}

export default App
