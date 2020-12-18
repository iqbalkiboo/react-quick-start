import React from 'react';
import CardStyle from '../../assets/css/card.module.css';
import { Card, CardImg, CardBody, CardTitle, Container, Progress, Col, Row} from 'reactstrap';

export default function CardList(props) {
    const { data, index } = props;
    return (
        <div>
            <div className={CardStyle.Wrapper}>
                <section>
                    <Card key={index} className={CardStyle.CardWrap}>
                        <Container className={CardStyle.ContCard}>
                            <CardImg className={CardStyle.CardImg} top src={data.image} alt="image" />
                            <CardBody className={CardStyle.Cbody}>
                                <CardTitle className={CardStyle.secTit}>{data.title}</CardTitle>
                                {
                                    (data.campaigner_is_verified === true) 
                                    ? <img style={{marginLeft: "92%"}} src={data.campaigner_badge} alt="campaigner_badge"/>
                                    : <div style={{marginTop: "11%"}}></div>
                                }
                                <Progress animated color="info" value={data.donation_percentage * 100} max="100" />
                                <Row>
                                    <Col style={{textAlign: "left"}}>
                                        <span style={{display: "block"}}>Terkumpul</span>
                                        Rp. {new Intl.NumberFormat('id', { maximumSignificantDigits: 3 }).format(data.donation_received)}
                                    </Col>
                                    <Col style={{textAlign: "right"}}>
                                        <span style={{display: "block"}}>Sisa Hari</span>
                                        {data.days_remaining} Hari
                                    </Col>
                                </Row>
                            </CardBody>
                        </Container>
                    </Card >
                </section>
            </div >
        </div >
    )
}
