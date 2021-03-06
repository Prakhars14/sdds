import React from 'react';
import { Col, Container, Row } from 'reactstrap'


const Infra = () => {
    return (
        <>
        <Container className="mt-5 mb-5">
            <Row>
                <Col><h3>Infrastructure</h3></Col>
            </Row>
                <Row className="m-5">
                    <Col>
                        <h5>पुस्तकालय</h5>
                        <p className="text-muted m-4">
                        <span className="pr-5">&nbsp;</span>महाविद्यालय में एक उच्च कोटि का पुस्तकालय है, जिसमें पर्याप्त पुस्तके और सन्दर्भ-ग्रन्थ उपलब्ध हैं।
पुस्तकालय में अध्ययन हेतु पर्याप्त संख्या में पत्र-पत्रिकायें एवं दैनिक समाचार-पत्र एवं विषयगत जनरल्स भी
उपलब्ध हैं। प्रत्येक छात्रा को पुस्तकालय की सदस्यता मिलेगी। सदस्यों को एक बार में एक पुस्तक 15 दिन के
लिये दी जायेगी, जिसे वापस करने के बाद ही दूसरी पुस्तक दी जायेगी।
                        </p>
                        <h5>खेल-कूद</h5>
                        <p className="text-muted m-4">
                        <span className="pr-5">&nbsp;</span>महाविद्यालय में विकसित खेल परिसर हैं। खेल-कूद के संसाधन उपलब्ध हैं। अन्तर महाविद्यालय क्रीड़ा
प्रतियोगिताओं में भाग लेने के लिए क्रीड़ा समिति की अनुमति आवश्यक है। क्रीड़ा सामग्री घर ले जाने की अनुमति
नहीं होगी।
                        </p>
                        <h5>कम्प्युर एवं संगीत शिक्षा</h5>
                        <p className="text-muted m-4">
                        <span className="pr-5">&nbsp;</span>महाविद्यालय में छात्राओं के लिये कम्प्यूटर, संगीत एवं सिलाई सिखाने की समुचित व्यवस्था हैं। इच्छुक
छात्रायें कार्यालय से सम्पर्क कर के जानकारी ले सकती हैं।
                        </p>
                        <h5>साइकिल स्टैण्ड</h5>
                        <p className="text-muted m-4">
                        <span className="pr-5">&nbsp;</span>महाविद्यालय में साईकिल स्टैण्ड की व्यवस्था हैं। छात्राओं के लिए अपनी साईकिल स्टैण्ड पर रखना
अनिवार्य हैं।बाहर परिसर में या बरामदे में साईकिल रखाना अनुशासनहीनता समझी जायेगी। साईकिल स्टैण्ड की
सुविधा के लिए वार्षिक शुल्क रु. 100 है।
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Infra
