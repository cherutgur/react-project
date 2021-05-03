import classNames from 'classnames';
import React, {useEffect,useState} from 'react'
// import '../RatingTable/RatingTable.scss'
import { useTranslation } from 'react-i18next';

function RatingTable({record,userName,level}) {

  const { t, i18n } = useTranslation();
  const [usersToRender, setUsersToRender] = useState([{userName:'loading'}])

  useEffect(() => {
    getUsers();
    console.log('record change');
    console.log({record});
    // RateTheUsers(users);
    // renderToTable()
  }, [record])

  const getUsers = () => {

    fetch('/getUsers')
      .then(response => response.json())
      .then(({ users }) => {
        let RatedUsers = users.sort(function (a, b) {
          if(level===15) return b.record1 - a.record1;
          if(level===10) return b.record2 - a.record2;
          if(level===5) return b.record3 - a.record3;
        })
        setUsersToRender(RatedUsers)
        console.log('set new users');
        console.log(users);
      }
      )
  }


  return (

    // 

    // // table__td
    <div className='table'>
      <h1 className='table__title'>{t('gamePage.level')} {level === 15 ? 1 : level === 10 ? 2 : 3}</h1>
      <table>
        <thead>
          <tr>
            <th>{t('gamePage.tableTitleUserName')}</th>
            <th>{t('gamePage.tableTitleRecord')}</th>
          </tr>
        </thead>
        <tbody>
          {usersToRender.map((user, index) => {
            return (

              <tr key={index} style={(user.userName) === userName ? { backgroundColor: "green" } : null} className={(user.userName) === userName? 'table__tr table__tr--current' : 'table__tr'}>
                <th >{user.userName}</th>
                <th>{
                  level === 15 ?
                    user.record1 : level === 10 ? user.record2 : user.record3}</th>
              </tr>
            )
          }
          )}
        </tbody>
      </table>
    </div>
  )
}

export default RatingTable
