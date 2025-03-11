import React from 'react';
import './CourseInfo.scss';
import Title from '../../common/Title/Title';

const CourseInfoTable = () => {

  return (
    <div className="w-100 table_wrapper mt-3">
     <Title title={'What We Offers'} />
      <div className="table_container">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Features</th>
              <th>Free</th>
              <th>Medium</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Lesson Access</th>
              <td>Basic programming tutorials</td>
              <td>Intermediate courses + Basic tutorials</td>
              <td>All courses including advanced content</td>
            </tr>
            <tr>
              <th>Project Support</th>
              <td>3 starter projects</td>
              <td>10 mid-level projects</td>
              <td>Unlimited projects with industry examples</td>
            </tr>
            <tr>
              <th>Code Reviews</th>
              <td>Community feedback only</td>
              <td>Weekly group reviews</td>
              <td>Personalized code reviews within 24hrs</td>
            </tr>
            <tr>
              <th>Mentor Support</th>
              <td>Forum access only</td>
              <td>Email support (48hr response)</td>
              <td>1-on-1 video mentoring sessions</td>
            </tr>
            <tr>
              <th>Coding Environment</th>
              <td>Basic online editor</td>
              <td>Advanced IDE with limited features</td>
              <td>Full-featured IDE with cloud storage</td>
            </tr>
            <tr>
              <th>Certificate</th>
              <td>None</td>
              <td>Course completion certificates</td>
              <td>Accredited certification</td>
            </tr>
            <tr>
              <th>Community Access</th>
              <td>Public forums only</td>
              <td>Private student groups</td>
              <td>Industry networking events</td>
            </tr>
            <tr class="price-row">
              <th>Price</th>
              <td>$0</td>
              <td>$19.99/month</td>
              <td>$49.99/month</td>
            </tr>
          </tbody>
        </table>
      </div>
      
    </div>
  );
};

export default CourseInfoTable;