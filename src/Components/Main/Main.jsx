import React, {useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineClipboardCheck } from "react-icons/hi"

import img from '../../Assets/img (1).jpg'
import img2 from '../../Assets/img (2).jpg'
import img3 from '../../Assets/img (3).jpg'
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).jpg'
import img9 from '../../Assets/img (9).jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    desTitle: 'Mt. Cikuray',
    location: 'Jawa Barat',
    grade: '2.821',
    description: 'Gunung Cikuray adalah gunung yang memiliki ketinggian 2.821 meter di atas permukaan laut (MDPL), menjadikannya sebagai gunung tertinggi keempat di Jabar, setelah Gunung Ciremai, Pangrango dan Gede.'
  },

  {
    id:2,
    imgSrc: img2,
    desTitle: 'Mt. Gede Pangrango',
    location: 'Jawa Barat',
    grade: '3.019',
    description: 'Kawasan TNGPP memang sudah dikenal secara internasional sejak zaman dahulu kala, saat para pengembara barat (para peneliti botani Belanda) mampir di kawasan ini.'
  },

  {
    id:3,
    imgSrc: img3,
    desTitle: 'Mt. Ciremai',
    location: 'Jawa Barat',
    grade: '3.078',
    description: 'Gunung ini memiliki kawah ganda. kawah barat yang beradius 400 m terpotong oleh kawah timur yang beradius 600 m. Pada ketinggian sekitar 2.900 mdpl di lereng selatan, terdapat bekas titik letusan yang dinamakan Gowa Walet.'
  },

  {
    id:4,
    imgSrc: img4,
    desTitle: 'Mt. Merbabu',
    location: 'Jawa Tengah',
    grade: '3.145',
    description: 'Gunung Merbabu dikenal melalui naskah-naskah masa pra-islam sebagai Gunung Damalung atau Gunung pam(a)rihan. Di lerengnya pernah terdapat pertapaan terkenal dan pernah disinggahi oleh Bujangga Manik pada abad ke-15, menurut etimologi.'
  },

  {
    id:5,
    imgSrc: img5,
    desTitle: 'Mt. Prau',
    location: 'Jawa Tengah',
    grade: '2.565',
    description: 'Puncak dari Gunung Parahu merupakan padang rumput luas yang memanjang dari barat ke timur. Bukit-bukit dan sabana dengan sedikit pepohonan dapat dijumpai pada puncaknya. Gunung ini menjadi salah satu tujuan pendakian utama di Dataran Tinggi Dieng.'
  },

  {
    id:6,
    imgSrc: img6,
    desTitle: 'Mt. Slamet',
    location: 'Jawa Tengah',
    grade: '3.428',
    description: 'Gunung slamet adalah gunung tertinggi di Jawa Tengah dan gunung tertinggi kedua di pulau Jawa, setelah Gunung Semeru. Gunung Slamet juga merupakan salah satu gunung tunggal terbesar atau terluas di Indonesia seperti halnya Gunung Tambora di Nusa Tenggara Barat.'
  },

  {
    id:7,
    imgSrc: img7,
    desTitle: 'Mt. Rinjani',
    location: 'Nusa Tenggara Barat',
    grade: '3.728',
    description: 'Pendakian Gunung Rinjani (puncak) merupakan salah satu objek wisata yang menjadi andalan di kawasan Taman Nasional Gunung Rinjani. Gunung Rinjani sebagai gunung vulkanik yang masih aktif nomor 2 tertinggi di Indonesia. Puncak Gunung Rinjani merupakan tujuan sebagian besar para petualang dan pecinta alam.'
  },

  {
    id:8,
    imgSrc: img8,
    desTitle: 'Mt. Sumbing',
    location: 'Jawa Tengah',
    grade: '3.371',
    description: 'Gunung Sumbing merupakan gunung tertinggi ketiga di Pulau Jawa setelah Gunung Semeru dan Gunung Slamet. Gunung ini secara administratif terletak di tiga wilayah kabupaten, yaitu Kabupaten Magelang, Kabupaten Temanggung dan Kabupaten Wonosobo.'
  },

  {
    id:9,
    imgSrc: img9,
    desTitle: 'Mt. Sindoro',
    location: 'Jawa Tengah',
    grade: '3.153',
    description: 'Puncak Gunung Sindoro merupakan destinasi favorit bagi para pendaki dan para pecinta alam. Gunung yang terletak di Kabupaten Temanggung ini menyimpan potensi wisata alam yang besar. Gunung Sindoro memiliki ketinggian yang cukup menantang yaitu mencapai 3.153 mdpl pada puncaknya.'
  },
]

const Main = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most visited mountains
          </h3>
        </div>

        <div className="secContent grid">
            {
              Data.map(({id, imgSrc, desTitle, location, grade, description}) => {
                return(
                    <div key={id} data-aos="fade-up" className="singleDestination">
                        <div className="imageDiv">
                          <img src={imgSrc} alt=
                          {desTitle} />
                        </div>

                        <div className="cardInfo">
                          <h4 className="desTitle">
                          {desTitle}</h4>
                          <span className="continent flex">
                            <HiOutlineLocationMarker className='icon'/>
                            <span className="name">{location}</span>
                          </span>

                          <div className="fees flex">
                            <div className="grade">
                              <span>{grade}<small>MDPL</small></span>
                            </div>
                          </div>

                          <div className="desc">
                            <p>{description}</p>
                          </div>

                          <button className='btn flex'>
                            DETAILS <HiOutlineClipboardCheck className='icon'/>
                          </button>
                        </div>
                    </div>
                )
              })
            }
        </div>
    </section>
  )
}

export default Main
