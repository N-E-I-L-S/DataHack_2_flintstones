// import React from 'react';
// import useLawyers from '../../context/LawyerContext';
// import Loader from '../../components/Loader';
// import Navbar from '../../components/Navbar';
// import { NavLink } from 'react-router-dom';

// const cardContainerStyle = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'space-between',
//   overflowX: 'hidden', // Hide horizontal overflow
//   position: 'relative',
// };

// const cardStyle = {
//   flex: '0 1 calc(33.33% - 1em)',
//   margin: '0.5em',
//   background: 'linear-gradient(60deg, #FFFFE0, #FFDA03)',
//   color: '#fff',
//   fontFamily: 'Raleway, sans-serif',
//   fontSize: '16px',
//   padding: '1.5em',
//   border: '1px solid #ccc',
//   borderRadius: '10px',
//   boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
//   transform: 'perspective(1000px) rotateY(30deg) rotateX(15deg)',
//   transition: 'transform 0.5s',
//   cursor: 'pointer',
// };

// const enlargedCardStyle = {
//   flex: '0 1 calc(50% - 1em)',
//   transform: 'scale(1.1)',
//   padding: '1em',
//   border: '1px solid #ccc',
//   boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   backgroundColor: 'yellow', // Set your desired background color (yellow)
//   color: 'black', // Text color
// };

// const lawyerInfoStyle = {
//   marginBottom: '1em',
// };

// const nameStyle = {
//   fontSize: '24px',
//   fontWeight: 'bold',
//   marginBottom: '0.5em',
// };

// export default function DisplayLawyer() {
//   const { alllawyers1, lawtype } = useLawyers();

//   const alllawyers = [
//     {
//       Name: 'Neil',
//       Years_of_Experience: '4',
//       Location: 'Mumbai',
//       Cost_per_hour: '400',
//       Area_of_Expertise: 'Labor Law',
//       Client_Feedback: '4',
//       Gender: 'Male',
//       Pro_Bono_Community: 'Yes',
//       Language1: 'English',
//       Jurisdiction: 'High Court',
//     },
//     {
//       Name: 'Neil',
//       Years_of_Experience: '4',
//       Location: 'Mumbai',
//       Cost_per_hour: '400',
//       Area_of_Expertise: 'Labor Law',
//       Client_Feedback: '4',
//       Gender: 'Male',
//       Pro_Bono_Community: 'Yes',
//       Language1: 'English',
//       Jurisdiction: 'High Court',
//     },
//     {
//       Name: 'Neil',
//       Years_of_Experience: '4',
//       Location: 'Mumbai',
//       Cost_per_hour: '400',
//       Area_of_Expertise: 'Labor Law',
//       Client_Feedback: '4',
//       Gender: 'Male',
//       Pro_Bono_Community: 'Yes',
//       Language1: 'English',
//       Jurisdiction: 'High Court',
//     },
//     {
//       Name: 'Neil',
//       Years_of_Experience: '4',
//       Location: 'Mumbai',
//       Cost_per_hour: '400',
//       Area_of_Expertise: 'Labor Law',
//       Client_Feedback: '4',
//       Gender: 'Male',
//       Pro_Bono_Community: 'Yes',
//       Language1: 'English',
//       Jurisdiction: 'High Court',
//     },
//     {
//       Name: 'Neil',
//       Years_of_Experience: '4',
//       Location: 'Mumbai',
//       Cost_per_hour: '400',
//       Area_of_Expertise: 'Labor Law',
//       Client_Feedback: '4',
//       Gender: 'Male',
//       Pro_Bono_Community: 'Yes',
//       Language1: 'English',
//       Jurisdiction: 'High Court',
//     },
//   ];

//   const [hoveredIndex, setHoveredIndex] = React.useState(null);
//   const [visibleCards, setVisibleCards] = React.useState(3); // Number of cards visible at a time
//   const [activeIndex, setActiveIndex] = React.useState(0);

//   const handleNextClick = () => {
//     if (activeIndex < alllawyers.length - visibleCards) {
//       setActiveIndex(activeIndex + 1);
//     }
//   };

//   const handlePrevClick = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     }
//   };

//   return (
//     <>
//       <Navbar />

//       <div style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', margin: '20px' }}>
//         These Attorneys match your description
//       </div>
//       <div style={{ fontSize: '18px', textAlign: 'center', marginBottom: '20px' }}>
//         Laws Include: <br />
//         {lawtype ? lawtype : null}
//       </div>
//       <div style={cardContainerStyle}>
//         {alllawyers.map((lawyer, index) => (
//           <NavLink to={`/user/onelawyer/${lawyer.Name}`} key={index}>
//             <div
//               style={{
//                 ...cardStyle,
//                 display: index >= activeIndex && index < activeIndex + visibleCards ? 'block' : 'none',
//                 transform: index === hoveredIndex ? enlargedCardStyle.transform : cardStyle.transform,
//               }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div style={nameStyle}>{lawyer.Name}</div>
//               <div style={lawyerInfoStyle}>Years of Experience: {lawyer.Years_of_Experience}</div>
//               <div style={lawyerInfoStyle}>Location: {lawyer.Location}</div>
//               <div style={lawyerInfoStyle}>Cost per Hour: {lawyer.Cost_per_hour}</div>
//               <div style={lawyerInfoStyle}>Client Feedback: {lawyer.Client_Feedback}</div>
//               <div style={lawyerInfoStyle}>Area of Expertise: {lawyer.Area_of_Expertise}</div>
//               <div style={lawyerInfoStyle}>Gender: {lawyer.Gender}</div>
//               <div style={lawyerInfoStyle}>Pro Bono Community: {lawyer.Pro_Bono_Community}</div>
//             </div>
//           </NavLink>
//         ))}
//         {activeIndex > 0 && (
//           <button onClick={handlePrevClick} style={prevButtonStyle}>
//             &#8249;
//           </button>
//         )}
//         {activeIndex < alllawyers.length - visibleCards && (
//           <button onClick={handleNextClick} style={nextButtonStyle}>
//             &#8250;
//           </button>
//         )}
//       </div>
//     </>
//   );
// }

// const prevButtonStyle = {
//   position: 'absolute',
//   left: '0.5em',
//   top: '50%',
//   transform: 'translateY(-50%)',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   border: 'none',
//   color: 'white',
//   fontSize: '24px',
//   padding: '0.5em 1em',
//   borderRadius: '50%',
//   cursor: 'pointer',
// };

// const nextButtonStyle = {
//   position: 'absolute',
//   right: '0.5em',
//   top: '50%',
//   transform: 'translateY(-50%)',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   border: 'none',
//   color: 'white',
//   fontSize: '24px',
//   padding: '0.5em 1em',
//   borderRadius: '50%',
//   cursor: 'pointer',
// };

import React from 'react';
import useLawyers from '../../context/LawyerContext';
import Navbar from '../../components/Navbar';
import { NavLink } from 'react-router-dom';

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  overflowX: 'hidden', // Hide horizontal overflow
  position: 'relative',
};

const cardStyle = {
  flex: '0 1 calc(25% - 1em)', // Increased the size to display 4 cards per row
  margin: '1em', // Increased margin
  background: 'linear-gradient(60deg, #FFF, #DAA520)', // Changed card color
  color: 'black',
  fontFamily: 'fantasy, sans-serif', // Use "fantasy" or "monospace" or any other font you prefer
  fontSize: '18px', // Increased font size
  padding: '1em',
  border: '2px solid #FF6100', // Adjusted border properties
  borderRadius: '10px',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const lawyerInfoStyle = {
  marginBottom: '1em',
};

const nameStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '0.5em',
};

export default function DisplayLawyer() {
  const { alllawyers1, lawtype } = useLawyers();

  const alllawyers = [
    {
      Name: 'Neil',
      Years_of_Experience: '4',
      Location: 'Mumbai',
      Cost_per_hour: '400',
      Area_of_Expertise: 'Labor Law',
      Client_Feedback: '4',
      Gender: 'Male',
      Pro_Bono_Community: 'Yes',
      Language1: 'English',
      Jurisdiction: 'High Court',
    },
    {
      Name: 'Emma',
      Years_of_Experience: '6',
      Location: 'New York',
      Cost_per_hour: '500',
      Area_of_Expertise: 'Corporate Law',
      Client_Feedback: '5',
      Gender: 'Female',
      Pro_Bono_Community: 'No',
      Language1: 'English',
      Jurisdiction: 'Supreme Court',
    },
    {
      Name: 'Sophia',
      Years_of_Experience: '8',
      Location: 'Los Angeles',
      Cost_per_hour: '450',
      Area_of_Expertise: 'Family Law',
      Client_Feedback: '4',
      Gender: 'Female',
      Pro_Bono_Community: 'Yes',
      Language1: 'Spanish',
      Jurisdiction: 'Family Court',
    },
    {
      Name: 'Oliver',
      Years_of_Experience: '5',
      Location: 'London',
      Cost_per_hour: '550',
      Area_of_Expertise: 'Real Estate Law',
      Client_Feedback: '4',
      Gender: 'Male',
      Pro_Bono_Community: 'Yes',
      Language1: 'English',
      Jurisdiction: 'District Court',
    },
    {
      Name: 'Ava',
      Years_of_Experience: '7',
      Location: 'Chicago',
      Cost_per_hour: '475',
      Area_of_Expertise: 'Criminal Law',
      Client_Feedback: '5',
      Gender: 'Female',
      Pro_Bono_Community: 'Yes',
      Language1: 'English',
      Jurisdiction: 'Criminal Court',
    },
    {
      Name: 'Liam',
      Years_of_Experience: '4',
      Location: 'Toronto',
      Cost_per_hour: '400',
      Area_of_Expertise: 'Immigration Law',
      Client_Feedback: '4',
      Gender: 'Male',
      Pro_Bono_Community: 'Yes',
      Language1: 'English',
      Jurisdiction: 'Immigration Court',
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const [visibleCards, setVisibleCards] = React.useState(4); // Display 4 cards per row
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNextClick = () => {
    if (activeIndex < alllawyers.length - visibleCards) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrevClick = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', margin: '20px' }}>
        These Attorneys match your description
      </div>
      <div style={{ fontSize: '18px', textAlign: 'center', marginBottom: '20px' }}>
        Laws Include: <br />
        {lawtype ? lawtype : null}
      </div>
      <div style={cardContainerStyle}>
        {alllawyers.map((lawyer, index) => (
          <NavLink to={`/user/onelawyer/${lawyer.Name}`} key={index}>
            <div
              style={{
                ...cardStyle,
                display: index >= activeIndex && index < activeIndex + visibleCards ? 'block' : 'none',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={nameStyle}>{lawyer.Name}</div>
              <div style={lawyerInfoStyle}>Years of Experience: {lawyer.Years_of_Experience}</div>
              <div style={lawyerInfoStyle}>Location: {lawyer.Location}</div>
              <div style={lawyerInfoStyle}>Cost per Hour: {lawyer.Cost_per_hour}</div>
              <div style={lawyerInfoStyle}>Client Feedback: {lawyer.Client_Feedback}</div>
              <div style={lawyerInfoStyle}>Area of Expertise: {lawyer.Area_of_Expertise}</div>
              <div style={lawyerInfoStyle}>Gender: {lawyer.Gender}</div>
              <div style={lawyerInfoStyle}>Pro Bono Community: {lawyer.Pro_Bono_Community}</div>
            </div>
          </NavLink>
        ))}
        {activeIndex > 0 && (
          <button onClick={handlePrevClick} style={prevButtonStyle}>
            &#8249;
          </button>
        )}
        {activeIndex < alllawyers.length - visibleCards && (
          <button onClick={handleNextClick} style={nextButtonStyle}>
            &#8250;
          </button>
        )}
      </div>
    </>
  );
}

const prevButtonStyle = {
  position: 'absolute',
  left: '0.5em',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  border: 'none',
  color: 'white',
  fontSize: '24px',
  padding: '0.5em 1em',
  borderRadius: '50%',
  cursor: 'pointer',
};

const nextButtonStyle = {
  position: 'absolute',
  right: '0.5em',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  border: 'none',
  color: 'white',
  fontSize: '24px',
  padding: '0.5em 1em',
  borderRadius: '50%',
  cursor: 'pointer',
};
