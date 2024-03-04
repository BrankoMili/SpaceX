import image_satellite from "../../assets/spacex-VBNb52J8Trk-unsplash.jpg";

const Company = ({ companyInfo }) => {
  const { name, founder, employees, headquarters, links, summary } =
    companyInfo;
  return (
    <div className="company-container">
      <h3>Company Name: {name}</h3>
      <p>Founder: {founder}</p>
      <p>Number of employees: {employees}</p>
      <p>
        {Object.keys(headquarters).map(key => (
          <div key={key}>
            {key}: {headquarters[key]}
          </div>
        ))}
      </p>

      <p className="summary-text">{summary}</p>

      <h4>Links:</h4>
      <div>
        <a href={links.elon_twitter}>Elon twitter</a>
        <a href={links.flickr}>Flickr</a>
        <a href={links.twitter}>Twitter</a>
        <a href={links.website}>Website</a>
      </div>

      <img src={image_satellite} alt="image_satellite" />
    </div>
  );
};

export default Company;
