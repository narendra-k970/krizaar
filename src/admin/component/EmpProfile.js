import React from 'react'

const Users = () => {
  return (
    <>
    <div className="tab-content">
    <div className='row'>
    <div class="table-container">
    <table>
      <thead>
        <tr>
          <th class="th-bg">Organization Name</th>
          <th>GSTIN Number</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Subscription</th>
          <th>Address</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="ID" className='trh'>Appz Global Tech</td>
          <td data-label="email">089-890-315</td>
          <td data-label="phone">appz@gmail.com</td>
          <td data-label="org">9876543210</td>
          <td data-label="address">1-Year</td>
          <td data-label="pass">G-39,Sector-63,Noida(Uttar Pradesh)</td>
          <td data-label="pass"><button class="edi-btn">Pause</button></td>
        </tr>
        <tr className='tr-bg'>
          <td data-label="ID" className='trh'>Astu Global Tech</td>
          <td data-label="email">746-890-315</td>
          <td data-label="phone">astu@gmail.com</td>
          <td data-label="org">9876556789</td>
          <td data-label="address">2-Year</td>
          <td data-label="pass">G-39,Sector-63,Noida(Uttar Pradesh)</td>
          <td data-label="pass"><button class="edi-btn">Pause</button></td>
        </tr>
        <tr>
          <td data-label="ID" className='trh'>Dreamvessels</td>
          <td data-label="email">089-890-315</td>
          <td data-label="phone">dreamvessels@gmail.com</td>
          <td data-label="org">9876501254</td>
          <td data-label="address">1.5-Year</td>
          <td data-label="pass">G-39,Sector-63,Noida(Uttar Pradesh)</td>
          <td data-label="pass"><button class="edi-btn">Pause</button></td>
        </tr>
        <tr className='tr-bg'>
          <td data-label="ID" className='trh'>Zreny</td>
          <td data-label="email">269-890-315</td>
          <td data-label="phone">zreny@gmail.com</td>
          <td data-label="org">9876501234</td>
          <td data-label="address">1.5-Year</td>
          <td data-label="pass">G-39,Sector-63,Noida(Uttar Pradesh)</td>
          <td data-label="pass"><button class="edi-btn">Pause</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
    </>
  )
}

export default Users