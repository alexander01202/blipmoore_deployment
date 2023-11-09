import avatar1 from '../assets/customer photos/download.jpg'
import avatar2 from '../assets/customer photos/random-pics.jpg'
import avatar3 from '../assets/customer photos/images.jpg'
import avatar4 from '../assets/customer photos/images (1).jpg'
import { Imports } from "../pages/imports";
import { GrStar } from 'react-icons/gr'
import './Review.css'
export default function Review(){
    const { Row,Col } = Imports

    const reviews = [
      { 
        title:'Quick Response, Quality Work',
        body: 'I had a plumbing emergency, and this company responded promptly. The plumber was professional and efficiently fixed the issue. The service cost was reasonable, but I deducted one star as I expected a bit more transparency regarding pricing. Overall, satisfied with the quick resolution.',
        image: avatar1
      },
      { 
        title:'Quick Response, Quality Work',
        body: 'I had a plumbing emergency, and this company responded promptly. The plumber was professional and efficiently fixed the issue. The service cost was reasonable, but I deducted one star as I expected a bit more transparency regarding pricing. Overall, satisfied with the quick resolution.',
        image: avatar2
      },
      { 
        title:'Quick Response, Quality Work',
        body: 'I had a plumbing emergency, and this company responded promptly. The plumber was professional and efficiently fixed the issue. The service cost was reasonable, but I deducted one star as I expected a bit more transparency regarding pricing. Overall, satisfied with the quick resolution.',
        image: avatar3
      },
    ]

return (
    <section>
      <Row>
        <Col className="review review-title" md={6}>
            <h1 className="title">Here's what our customers say</h1>
        </Col>
        <Col className="review review-list" md={6}>
          {
            reviews.map(review => (
            <div className="customer-review">
                <div className='mb-3' style={{ display:'flex',alignItems:'center',justifyContent:'space-between' }}>
                    <div className="customer-header">
                        <div>
                          <span className="storyTitle"><b>{review.title}</b></span>
                        </div>
                        <div className="parent-review-icon">
                          <GrStar className="review-icon" />
                          <GrStar className="review-icon"/>
                          <GrStar className="review-icon"/>
                          <GrStar className="review-icon"/>
                          <GrStar className="review-icon"/>
                        </div>
                    </div>
                    <img src={review.image} className="review-avatar" />
                </div>
                <div className="customer-body">
                  <p><i>
                    {review.body}
                  </i></p>
                </div>
            </div>
            ))
          }
            
        </Col>
     </Row>
    </section>
    )
}