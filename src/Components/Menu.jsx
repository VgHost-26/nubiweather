import React from "react"

function Menu({
  isMenuHidden,
  myCities,
  showHideMenu,
  changeCity,
  choosenCity,
}) {
  return (
    <div id="menu" isHidden={`${isMenuHidden}`}>
      <div className="menu-distancer">
          <h2 className="menu-secion-title">Locations</h2>
          <hr/>
          <ul className="locations">
            {myCities.map(city => {
              return (
                <li key={city} className={city === choosenCity ? "choosen" : ""}>
                  <input
                    type="button"
                    onClick={() => changeCity(city)}
                    value={city}
                  />
                </li>
              )
            })}
          </ul>
          <input translate="no" type="button" onClick={showHideMenu} className="close-button material-symbols-outlined no-fill" value={'cancel'}/>
      </div>
    </div>
  )
}

export default Menu
