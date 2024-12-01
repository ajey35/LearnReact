import { useMemo, useState } from "react"

let alltext = `
 Aaradhya, Aashi, Ananya, Anika, Arpita, Avni, Aditi, Ayesha, Bhavya, Bhumika, Charvi, Chhavi, Deepika, Divya, Eesha, Ekta, Gauri, Gunjan, Harini, Himani, Ishita, Isha, Jhanvi, Jyoti, Kashish, Kavya, Khushi, Kritika, Lavanya, Lipika, Mahima, Meera, Muskan, Nandini, Navya, Neha, Nikita, Nishtha, Pallavi, Pooja, Prakriti, Pranavi, Pragya, Priya, Radhika, Rashi, Rhea, Ridhi, Riya, Sakshi, Saloni, Samridhi, Sanjana, Sanya, Sara, Shailee, Shalini, Sharvani, Shivangi,Shreya, Shruti, Simran, Smriti, Sneha, Sohini, Sonal, Suhani, Tanisha, Tanya, Tavisha, Trisha, Tiya, Urvashi, Vaishnavi, Vanshika, Varsha, Vidhi, Vibha, Vrinda, Yashika, Yukti, Zoya, Aarna, Aarya, Anvi, Ira, Krisha, Mira, Myra, Pari, Prisha, Siya, Tanishka, Vedika, Ahana, Arya, Mehek, Ishani.
`;

function Filter() {
  const [sentence,setSentence]= useState(alltext.split(','));
  const [input,setInput] = useState("");
  const FilterOne = useMemo(()=>{return sentence.filter(x=>x.toLowerCase().includes(input.toLowerCase()))},[input]);

  return (
    <div>
        <input type="text" placeholder="Enter Text Here!" onChange={(e)=>setInput(e.target.value)}/>
        {FilterOne.map((sent)=><p>{sent}</p>)}
    </div>
  )
}
export default Filter
