import React, { useEffect, useState } from 'react'
import CardList from '../../components/Card';
import {
    Row, Col, Container,
} from 'reactstrap';
import API from '../../service';
import Header from '../../components/Header';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { getListData } from '../../store/data/actions';
import { useSelector } from 'react-redux';

//Redux
// import { connect } from 'react-redux';

//FetchData API ListProduct
function ListProduct() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()

    // fetch API List
    const listDataProduct = () => {
        API.getListData().then(res => {
            if (res.status === 200) {
                var response = res.data.data;
                if (response) {
                    setData(response);
                    setLoading(false);
                }
                // masukin data ke redux
                dispatch(getListData(response))
                if (response) {
                    setData(response);
                    setLoading(false);
                }
            }
        }).catch(err => {
            return err
        });
    }

    useEffect(() => {
        listDataProduct()
    }, [])

    // untuk get data dari redux
    const getDataProduct = useSelector((state) => {
        return state.dataReducer.dataListProduct.data
    })

    console.log(getDataProduct)
    
    return (
        <div>
            <Container>
                <Header />
                {
                    loading === true ? <Skeleton height={30} count={8} /> :
                        <Row xs={1} sm={2} md={3} lg={3} className="mb-4">
                            {
                                data.map((val, i) => {
                                    return < Col className="mt-2 mb-2" key={i} >
                                        <CardList data={val} index={i} />
                                    </Col>
                                })
                            }
                        </Row>
                }
            </Container>
        </div>
    )
}

export default (ListProduct);
