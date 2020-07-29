import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLoggedInName } from '../../store/user/selectors'
import Loading from '../../components/Loading'
import { selectCurrentHousehold } from '../../store/household/selectors'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { fetchHouseholdWithUsers } from '../../store/household/actions'

export default function Settings() {
  const dispatch = useDispatch()
  const householdId = useSelector(selectUserHouseholdId)
  const currentName = useSelector(selectLoggedInName)
  const currentHousehold = useSelector(selectCurrentHousehold)
  const [name, setName] = useState<string>()
  const [household, setHousehold] = useState<string>()
  const [email, setEmail] = useState<boolean>(true)
  const [file, setFile] = useState<any>()

  console.log(file)

  useEffect(() => {
    if (householdId) {
      dispatch(fetchHouseholdWithUsers(householdId))
    }
  }, [dispatch, householdId])

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log('save settings')
  }

  return (
    <div className="page-content login-page">
    {
      currentName && currentHousehold ? 
        <div>
          <h1>Settings</h1>
    
          <form onSubmit={e => submitHandler(e)}>
            <div className="login-container">
              <div className="login-field">
                <label htmlFor="nameSetting">Display name</label>
                <input id="nameSetting" placeholder={currentName} type="text" value={name} onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div className="login-field">
              <label htmlFor="householdSetting">Household</label>
              <input id="householdSetting" placeholder={currentHousehold} type="text" value={household} onChange={e => setHousehold(e.target.value)} />
            </div>
            <div className="login-field">
              <label htmlFor="mailSetting">Profile picture</label>
              <input id="mailSetting" type="file" checked={email} onChange={e => setFile(
                // @ts-ignore
                URL.createObjectURL(e.target.files[0])
              )} />
            </div>
            <div className="login-field">
              <label htmlFor="mailSetting">Yes, email me when my deadline is due</label>
              <input id="mailSetting" type="checkbox" checked={email} onChange={e => setEmail(!email)} />
            </div>
            <div className="login-footer">
              <button>Save settings</button>
            </div>
          </form>
        </div>
      :
      <Loading />
    }
    </div>
  )
}
