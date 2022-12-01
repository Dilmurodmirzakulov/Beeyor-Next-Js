import Scrollspy from 'react-scrollspy'
import { restorantsData } from './restorantsData'
export default function CompanyMenu() {
  return (
    <div className="aside-nav">
      <h4 className="m-0 es-font-medium es-font-size-20 es-pt-50">Меню ресторана</h4>
      <Scrollspy items={['rolls', 'sushi', 'sets', 'sashimi', 'desserts', 'beverages']} currentClassName="active" className="aside-nav-list list-unstyled">
        <li>
          <a className="aside-nav-item" href="#rolls">Ролы</a>
        </li>
        <li>
          <a className="aside-nav-item" href="#sushi">Суши</a>
        </li>
        <li>
          <a className="aside-nav-item" href="#sets">Сеты</a>
        </li>
        <li>
          <a className="aside-nav-item" href="#sashimi">Сашими</a>
        </li>
        <li>
          <a className="aside-nav-item" href="#desserts">Десерты</a>
        </li>
        <li>
          <a className="aside-nav-item" href="#bevereges">Напитки</a>
        </li>
      </Scrollspy>
    </div>
  )
}