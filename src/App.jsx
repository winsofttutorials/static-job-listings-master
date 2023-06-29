import "./Styles.css";
import data from "./utils/data.json";
const App = () => {
  return (
    <>
      <section className="a-wrapper">
        <div className="innerWidth a-container">
          <div className="top-cover">
            <div className="filler"></div>
          </div>
          <div className="paddings  bottom-cover">
            <div className="portfolio">
              {data.map((item, idx) => {
                return (
                  <div className="paddings  flexCol p-wrapper" key={idx}>
                    <div className="flexCol left-side">
                      <img src={item.logo} alt={item.company} width={70} />
                      <div className="company-profile">
                        <div>
                          <span className="primaryText">{item.company}</span>

                          {item.new === true && (
                            <span className="new">New!</span>
                          )}
                          {item.featured === true && (
                            <span className="featured">featured</span>
                          )}
                        </div>
                        <div>
                          <span className="titleText">{item.position}</span>
                        </div>
                        <div>
                          <span className="">{item.postedAt}</span>
                          <span
                            style={{
                              color: "var(--Dark-Grayish-Cyan)",
                              fontSize: "25px",
                              margin: "0 10px",
                            }}
                          >
                            &middot;
                          </span>
                          <span>{item.contract}</span>
                          <span
                            style={{
                              color: "var(--Dark-Grayish-Cyan)",
                              fontSize: "25px",
                              margin: "0 10px",
                            }}
                          >
                            &middot;
                          </span>
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flexColEnd right-side">
                      <button className="button">{item.role}</button>
                      <button className="button">{item.level}</button>

                      {item.tools.map((tool, i) => (
                        <button className="button" key={i}>
                          {tool}
                        </button>
                      ))}

                      {item.languages.map((lang, i) => (
                        <button className="button" key={i}>
                          {lang}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
