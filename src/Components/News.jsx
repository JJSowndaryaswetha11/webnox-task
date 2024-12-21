import React from 'react';
import '../Styles/News.css';

function News() {
  return (
    <>
      <div className="news-container">
        <div className="news-container1">
          <div className="news-images">
            <img src="/Images/news-img1.jpg" alt="" width={300} height={200} />
          </div>
          <div className="news-numbers">
            <h4>11</h4>
            <p>nov</p>
          </div>
          <div className="news-card">
            <p>cleaning</p>
            <h6>Temporarily issued</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="news-card-name">
              <img src="/Images/member-1.jpg" alt="" width={50} height={50} />
              <div className="news-name2">
              <p>michael howard</p>
              <p className='working'>consultant</p>
              </div>
            </div>
          </div>
        </div>

        {/* news-container2 */}
        <div className="news-container2">
          <div className="news-images2">
            <img src="/Images/news-img2.jpg" alt="" width={300} height={200} />
          </div>
          <div className="news-numbers2">
            <h4>12</h4>
            <p>nov</p>
          </div>
          <div className="news-card">
            <p>cleaning</p>
            <h6>Scheduled for today</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="news-card-name">
              <img src="/Images/member-2.jpg" alt="" width={50} height={50} />
              <div className="news-name2">
              <p>Clara howard</p>
              <p className='working'>Lawyer</p>
              </div>
            </div>
          </div>
        </div>

        {/* news-container3 */}
        <div className="news-container3">
          <div className="news-images3">
            <img src="/Images/news-img3.jpg" alt="" width={300} height={200} />
          </div>
          <div className="news-numbers3">
            <h4>13</h4>
            <p>nov</p>
          </div>
          <div className="news-card">
            <p>cleaning</p>
            <h6>Completed</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="news-card-name">
              <img src="/Images/background-2.jpg" alt="" width={50} height={50} />
              <div className="news-name2">
              <p>Abby howard</p>
              <p className='working'>consultant</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
