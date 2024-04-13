import {
    Select,
    InputLabel,
    MenuItem,
    FormHelperText,
    FormControl,
    InputAdornment,
  } from "@mui/material";
  import Depth5Frame from "./Depth5Frame";
  import styles from "./EmployeeSelecter.module.css";
  
  const EmployeeSelecter = () => {
    return (
      <div className={styles.employeeSelecter}>
        <header className={styles.depth2Frame0}>
          <div className={styles.depth3Frame0}>
            <div className={styles.depth4Frame0}>
              <div className={styles.depth5Frame0}>
                <div className={styles.depth6Frame0}>
                  <img className={styles.vector0} alt="" src="/vector--0.svg" />
                  <img
                    className={styles.vector1}
                    loading="lazy"
                    alt=""
                    src="/vector--1.svg"
                  />
                  <div className={styles.depth7Frame0} />
                  <div className={styles.depth7Frame1} />
                </div>
              </div>
              <div className={styles.depth5Frame1}>
                <div className={styles.depth6Frame01}>
                  <b className={styles.ssWeddings}>SS Weddings</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.depth3Frame1}>
            <nav className={styles.depth4Frame01}>
              <div className={styles.depth5Frame01}>
                <div className={styles.depth6Frame02}>
                  <div className={styles.home}>Home</div>
                </div>
              </div>
              <div className={styles.depth5Frame11}>
                <div className={styles.depth6Frame03}>
                  <div className={styles.aboutUs}>About Us</div>
                </div>
              </div>
              <div className={styles.depth5Frame2}>
                <div className={styles.depth6Frame04}>
                  <div className={styles.services}>Services</div>
                </div>
              </div>
              <div className={styles.depth5Frame3}>
                <div className={styles.depth6Frame05}>
                  <div className={styles.gallery}>Gallery</div>
                </div>
              </div>
              <div className={styles.depth5Frame4}>
                <div className={styles.depth6Frame06}>
                  <div className={styles.contact}>Contact</div>
                </div>
              </div>
            </nav>
            <div className={styles.depth4Frame1}>
              <div className={styles.depth5Frame02}>
                <div className={styles.depth6Frame07}>
                  <div className={styles.depth7Frame01}>
                    <img
                      className={styles.vector01}
                      loading="lazy"
                      alt=""
                      src="/vector--0-1.svg"
                    />
                    <div className={styles.depth8Frame0} />
                  </div>
                </div>
              </div>
              <div className={styles.depth5Frame12}>
                <div className={styles.depth6Frame08}>
                  <div className={styles.depth7Frame02}>
                    <img
                      className={styles.vector02}
                      loading="lazy"
                      alt=""
                      src="/vector--0-2.svg"
                    />
                    <div className={styles.depth8Frame01} />
                  </div>
                </div>
              </div>
              <div className={styles.depth5Frame21}>
                <div className={styles.depth6Frame09}>
                  <div className={styles.depth7Frame03}>
                    <img
                      className={styles.vector03}
                      loading="lazy"
                      alt=""
                      src="/vector--0-3.svg"
                    />
                    <div className={styles.depth8Frame02} />
                  </div>
                </div>
              </div>
            </div>
            <img
              className={styles.depth4Frame2}
              loading="lazy"
              alt=""
              src="/depth-4-frame-2@2x.png"
            />
          </div>
        </header>
        <section className={styles.employeeSelecterInner}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.chooseYourWeddingPlannerWrapper}>
                <h1 className={styles.chooseYourWedding}>
                  Choose Your Wedding Planner
                </h1>
              </div>
              <div className={styles.depth4Frame11}>
                <Depth5Frame
                  depth7Frame0="/depth-7-frame-0@2x.png"
                  coordinator="Coordinator"
                  startingAtLkr1500000="Starting at lkr1 5000.00"
                />
                <Depth5Frame
                  depth7Frame0="/depth-7-frame-0-1@2x.png"
                  coordinator="Photographer"
                  startingAtLkr1500000="Starting at lkr 20 000.00"
                />
                <Depth5Frame
                  depth7Frame0="/depth-7-frame-0-2@2x.png"
                  coordinator="DJ"
                  startingAtLkr1500000="Starting at lkr 8000.00"
                />
                <Depth5Frame
                  depth7Frame0="/depth-7-frame-0-3@2x.png"
                  coordinator="Caterer"
                  startingAtLkr1500000="Starting at lkr 4000.00"
                />
              </div>
            </div>
            <div className={styles.depth4Frame2Wrapper}>
              <div className={styles.depth4Frame21}>
                <div className={styles.depth6Frame010}>
                  <div className={styles.depth7Frame04}>
                    <div className={styles.depth8Frame03}>
                      <div className={styles.depth9Frame0}>
                        <b className={styles.selectCoordinator}>
                          Select Coordinator
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth6Frame1Wrapper}>
                  <div className={styles.depth6Frame1}>
                    <div className={styles.depth7Frame05}>
                      <div className={styles.depth8Frame04}>
                        <div className={styles.depth9Frame01}>
                          <b className={styles.selectPhotographer}>
                            Select Photographer
                          </b>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.depth6Frame2Wrapper}>
                  <FormControl
                    className={styles.depth6Frame2}
                    variant="standard"
                    sx={{
                      borderTopWidth: "1px",
                      borderRightWidth: "1px",
                      borderBottomWidth: "1px",
                      borderLeftWidth: "1px",
                      backgroundColor: "#ededed",
                      borderRadius: "0px 0px 0px 0px",
                      width: "73.17859445519024%",
                      height: "48px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "48px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 16,
                        fontWeight: "Bold",
                        fontFamily: "Plus Jakarta Sans",
                        textAlign: "left",
                        p: "0 !important",
                        justifyContent: "center",
                      },
                    }}
                  >
                    <InputLabel color="primary" />
                    <Select
                      color="primary"
                      disableUnderline
                      displayEmpty
                      IconComponent="null"
                    >
                      <MenuItem>Select DJ</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                </div>
                <div className={styles.depth6Frame3}>
                  <div className={styles.depth7Frame06}>
                    <div className={styles.depth8Frame05}>
                      <div className={styles.depth9Frame02}>
                        <b className={styles.selectCaterer}>Select Caterer</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.privacyPolicyParent}>
                  <div className={styles.privacyPolicy}>Privacy Policy</div>
                  <div className={styles.termsOfService}>Terms of Service</div>
                </div>
                <div className={styles.privacyPolicyTermsWrapper}>
                  <div className={styles.privacyPolicyTerms}>
                    <div className={styles.depth7Frame07}>
                      <img
                        className={styles.vector04}
                        loading="lazy"
                        alt=""
                        src="/vector--0-4.svg"
                      />
                      <div className={styles.depth8Frame06} />
                    </div>
                    <div className={styles.depth7Frame08}>
                      <img
                        className={styles.vector05}
                        loading="lazy"
                        alt=""
                        src="/vector--0-5.svg"
                      />
                      <div className={styles.depth8Frame07} />
                    </div>
                    <div className={styles.depth7Frame09}>
                      <img
                        className={styles.vector06}
                        loading="lazy"
                        alt=""
                        src="/vector--0-6.svg"
                      />
                      <div className={styles.depth8Frame08} />
                    </div>
                  </div>
                </div>
                <div className={styles.copyrightNotice}>
                  <div className={styles.weddingHallCustomization}>
                    © 2023 Wedding Hall Customization. All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default EmployeeSelecter;
