import React, {useState, useRef} from "react";
import styled from "styled-components";
import TabItem from "./TabItem/TabItem";

const TabContainer = styled.div``
const TabInnerContainer = styled.div`
  position: relative;
  width: 100%;
`


const PricingTab = () => {

    const [currentTab, setCurrentTab] = useState(0);
    const [bodyHeight, setBodyHeight] = useState(0);

    const item0 = useRef(null);
    const item1 = useRef(null);
    const item2 = useRef(null);
    const item3 = useRef(null);
    const item4 = useRef(null);
    const item5 = useRef(null);
    const item6 = useRef(null);
    const item7 = useRef(null);
    const item8 = useRef(null);
    const item9 = useRef(null);
    const item10 = useRef(null);
    const item11 = useRef(null);
    const item12 = useRef(null);
    const item13 = useRef(null);

    const refs = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13];

    const sampleAccordionData = [
        {
            category: "Stylizacja paznokci",
            services: [
                {
                    title: "Koretka paznokci żelowych",
                    time: 90,
                    price: 100
                },
                {
                    title: "Mała korekta",
                    time: 60,
                    price: 75
                },
                {
                    title: "Manicure hybrydowy",
                    time: 90,
                    price: 90
                },
                {
                    title: "Manicure japoński",
                    time: 60,
                    price: 70
                },
                {
                    title: "Manicure klasyczny",
                    time: 45,
                    price: 50
                },
                {
                    title: "Manicure SPA",
                    time: 75,
                    price: 70
                },
                {
                    title: "Przedłużanie paznokci",
                    time: 90,
                    price: 130
                },
                {
                    title: "Rekonstrukcja obgryzionych paznokci",
                    time: 120,
                    price: 150
                },
                {
                    title: "Ściąganie masy żelowej lub hybryd",
                    time: 60,
                    price: 55
                },
                {
                    title: "Żel mleczny (korekta)",
                    time: 75,
                    price: 90
                },
                {
                    title: "Żel na naturalną płytkę paznokcia",
                    time: 90,
                    price: 100
                }
            ]
        },
        {
            category: "Zabiegi na dłonie",
            services: [
                {
                    title: "Parafina na ciepło",
                    time: 30,
                    price: 40
                },
                {
                    title: "SPA dla dłoni",
                    time: 60,
                    price: 70
                }
            ]
        },
        {
            category: "Rzęsy",
            services: [
                {
                    title: "Rzęsy 2-3D",
                    time: 150,
                    price: "140,00 - 160,00"
                },
                {
                    title: "Rzęsy 3-5D",
                    time: 150,
                    price: "150,00 - 170,00"
                },
                {
                    title: "Rzęsy 5-8D",
                    time: 150,
                    price: "160,00 - 180,00"
                },
            ]
        },
        {
            category: "Lifting rzęs",
            services: [
                {
                    title: "Lifting rzęs",
                    time: 60,
                    price: "110,00"
                },
                {
                    title: "Lifting rzęs + henna i regulacja brwi",
                    time: 90,
                    price: "140,00"
                }
            ]
        },
        {
            category: "Henna i regulacja",
            services: [
                {
                    title: "Henna pudrowa",
                    time: 60,
                    price: "75,00"
                },
                {
                    title: "Henna + regulacja brwi",
                    time: 25,
                    price: "45,00"
                },
                {
                    title: "Henna rzęs i brwi + regulacja brwi",
                    time: 40,
                    price: "60,00"
                }
            ]
        },
        {
            category: "Depilacja woskiem",
            services: [
                {
                    title: "Broda",
                    time: 15,
                    price: "30,00"
                },
                {
                    tite: "Wąsik",
                    time: 10,
                    price: "20,00"
                },
                {
                    tite: "Wąsik + broda",
                    time: 25,
                    price: "40,00"
                },
            ]
        },
        {
            category: "Zabiegi na twarz",
            services: [
                {
                    title: "Konsultacja",
                    time: 15,
                    price: "0,00"
                },
                {
                    title: "GEN FACTOR + mezoterapia mikroigłowa",
                    time: "60 - 90",
                    price: "300,00 - 350,00"
                },
                {
                    title: "Individual Beauty Therapy",
                    time: "75 - 90",
                    price: "170,00 - 210,00"
                },
                {
                    title: "Mezoterapia bezigłowa",
                    time: "75 - 90",
                    price: "200,00 - 230,00"
                },
                {
                    title: "Mezoteriapia mikroigłowa",
                    time: "90 - 120",
                    price: "250,00 - 280,00"
                },
                {
                    title: "Mezoterpia mikroigłowa z kwasem laktobionowym",
                    time: "90 - 120",
                    price: "300,00 - 340,00"
                },
                {
                    title: "Oczyszczanie wodorowe",
                    time: "90 - 120",
                    price: "300,00 - 340,00"
                },
                {
                    title: "Total Lifting PPV+",
                    time: "75 - 90",
                    price: "150,00 - 180,00"
                },
                {
                    title: "X-Foliate Specjalistyczne peelingi chemiczne",
                    time: "60-90",
                    price: "150,00 - 180,00"
                },
                {
                    title: "Zabieg oczyszczająco-nawilżający",
                    time: "60 - 75",
                    price: "170,00 - 200,00"
                }
            ]
        },
        {
            category: "Hialuron Pen (zabiegi bezigłowe)",
            services: [
                {
                    title: "Konsultacja",
                    time: 15,
                    price: "0,00"
                },
                {
                    title: "Usta (korekta kształtu, powiększenie, ujędrnienie)",
                    time: 90,
                    price: "650,00"
                },
                {
                    title: "Zmarszczki",
                    time: 90,
                    price: "650,00"
                }
            ]
        },
        {
            category: "Makijaż permanentny",
            services: [
                {
                    title: "Brwi",
                    time: 90,
                    price: "690,00"
                },
                {
                    title: "Dopigmentowanie",
                    time: 60,
                    price: "0,00"
                },
                {
                    title: "Kreska (zagęszczająca) w lini rzęs",
                    time: 60,
                    price: "350,00"
                }
            ]
        },
        {
            category: "Lipoliza",
            services: [
                {
                    title: "Konsultacja",
                    time: 15,
                    price: "0,00"
                },
                {
                    title: "Lipoliza",
                    time: 45,
                    price: "300,00"
                }
            ]
        },
        {
            category: "Dermomasaż",
            services: [
                {
                    title: "Dermomasaż",
                    time: 30,
                    price: "70,00"
                }
            ]
        },
        {
            category: "Elektrostymulacja",
            services: [
                {
                    title: "Elektrostymulacja",
                    time: 30,
                    price: "60,00"
                }
            ]
        },
        {
            category: "Stopy",
            services: [
                {
                    title: "Hybrydy na stopach",
                    time: 45,
                    price: "65,00"
                },
                {
                    title: "Pedicure frezarkowy",
                    time: 60,
                    price: "95,00"
                },
                {
                    title: "Pedicure frezarkowy + hybrydy na stopy",
                    time: 90,
                    price: "150,00"
                },
                {
                    title: "Ściąganie hybrydy",
                    time: 30,
                    price: "50,00"
                },
            ]
        }
    ];


    return (
        <TabContainer>
            <TabInnerContainer>
                <TabItem refs={refs} sampleAccordionData={sampleAccordionData} currentTab={currentTab} setCurrentTab={setCurrentTab} bodyHeight={bodyHeight}
                         setBodyHeight={setBodyHeight}/>
            </TabInnerContainer>
        </TabContainer>
    )
}

export default PricingTab