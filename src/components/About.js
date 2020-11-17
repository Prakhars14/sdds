import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import banner from '../assets/images/02.jpg';

const About = () => {
    return (
        <>

            <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>About us</h3></Col>
            </Row>
            <Row className="d-flex justify-content-center m-5 ">
                <Col lg={6}>
                    <img src={banner} alt="Banner"  border="0" className="banner"/>
                </Col>
            </Row>
            <Row>
                <Col>
                <p className="objective">
                          <span className="pr-5">&nbsp;</span>महाविद्यालय को सत्र 2013-2014 में शिक्षण कार्य शुरू करने के लिए दीनदयाल उपध्याय गोरखपुर विश्वविद्याल
से सम्बद्धता प्राप्त हुई और शिक्षण कार्य प्रारम्भ हो गया। हम ऐसे स्नातक तैयार करने के लिए कृत संकल्पित हैं,
जिसमें अपना भविष्य सँवारने के साथ देश सँवारने की कूबत हो। हमारी कोशिश रहती हैं कि छात्राओं को देश-विदेश
के शि़़क्षाविदों के साथ संवाद करने का अवसर मिले। इसके लिए महाविद्यालय समय-समय पर विशिष्ट विद्वानो
के व्याख्यान और संवाद सत्र आयोजित करता रहता हैंै। पहले वार्षिकोत्सव पर 7 फरवरी 2014 को माँरीशस की
सुप्रीसिद्ध लेखिका और भोजपुरी स्पीकिंग यूनियन की अध्यक्ष डा. सरिता बुधू छात्राओं के बीच थीं। छात्राओं के
व्यक्तित्व के सर्वांगीण विकास के लिए साहित्यिक, सांस्कृतिक कार्यक्रमों का सिलसिला जारी रहता है। सिलाई, बुनाई,
संगीत, कला से लेकर कम्प्यूटर शिक्षा का उचित प्रबन्ध किया गया है। योग शिक्षा से लेकर खेलकूद तक की
व्यवस्था की जा रही है। हमें खुशी है कि पहले ही सत्र में हमारी छात्राएँ क्षेत्रिय स्तर की बैडमिन्टन प्रतियोगिता में
प्रथम आयीं और महाविद्यालय के लिए पहला मेडल ले आयीं। सत्र 2016-17 से महाविद्यालय में महात्मा गांधी
अन्तराष्ट्रीय हिंदी विश्वविद्याल के विभिन्न व्यावसायिक पाठ्यक्रम का संचालन हो रहा है जिससे छात्र/छात्राओं की
सफलता शत प्रतिशत रहा है एवं सत्र 2019-20 से राजर्षि टंडन मुक्त विश्वविद्यालय के विभिन्न व्यवसायिक
पाठ्यक्रम संचालित हो रहा है। जिससे सेवारत भी इसमें लाभ ले रहे हैं।<br/><br/><span className="pr-5">&nbsp;</span>
हम युग की चुनैतियों के अनुरूप अपनी बेेटियों को तैयार करना चाहते हैं। इसके लिए जरूरी है कि उन्हें
रोजगार के लिए आवश्यक योग्यता मिले। साथ ही उनकी वैचारिक, मानसिक दृढ़ता ऐसी हो कि वे जीवन क्षेत्र में
आनेवाली सभी चुनौतियों का सामन कर सकें। हमारी बेटियाँ खुद तो बेहतर नागरिक बनें ही समाज को बेहतर
बनाने में नेतृत्वकारी भुमिका निभा सकें। यह तभी सम्भव हैं जब महाविद्यालय परिवार के साथ अभिभावक भी
सन्नद्ध रहें। इसके लिए महाविद्यालय निरन्तर अभिभावको से संवाद करता रहता है। हमें खुशी है कि इस क्षेत्र के
अनेक विचारशील नागरिक और अभिभावक अपनी बेटियों की शिक्षा के लिए उसी लगन और तत्परता से जुटे हैं जो
आमतौर पर पर बेटों की शिक्षा के लिए ही दिखती है। हम ऐसे अभिभावकों का अभिनन्दन करते हैं और को बेहतर
बनाने में उनके सहयोग/सुझाव आमन्त्रित करते हैं।
                        </p>
                </Col> 
            </Row>
            </Container>
        </>
    )
}

export default About
