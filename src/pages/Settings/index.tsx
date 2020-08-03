import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectLoggedInName, selectLoggedInUserId } from '../../store/user/selectors'
import Loading from '../../components/Loading'
import { selectCurrentHousehold } from '../../store/household/selectors'
import { selectUserHouseholdId } from '../../store/user/selectors'
import { fetchHouseholdWithUsers } from '../../store/household/actions'
import { updateUserSettings } from '../../store/user/actions'

export default function Settings() {
  const dispatch = useDispatch()
  const householdId = useSelector(selectUserHouseholdId)
  const currentName = useSelector(selectLoggedInName)
  const userId = useSelector(selectLoggedInUserId)
  const currentHousehold = useSelector(selectCurrentHousehold)
  const [name, setName] = useState<string>()
  const [household, setHousehold] = useState<string>()
  const [email, setEmail] = useState<boolean>(true)
  // const [file, setFile] = useState<any>()

  useEffect(() => {
    if (householdId) {
      dispatch(fetchHouseholdWithUsers(householdId))
    }
  }, [dispatch, householdId])

  const submitHandler = (e: any) => {
    e.preventDefault()
    dispatch(updateUserSettings(userId, name, email))
    console.log('save settings')
  }

  return (
    <div className="settings-background ">
      <div className="settings">
      {
        currentName && currentHousehold ? 
          <div>
            <h1>Settings</h1>
      
            <form onSubmit={e => submitHandler(e)}>
              <div className="form-container">
                <div className="form-field">
                  <label htmlFor="nameSetting">Display name</label>
                  <input id="nameSetting" placeholder={currentName} type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
              </div>
              <div className="form-field">
                <label htmlFor="householdSetting">Household</label>
                <input id="householdSetting" placeholder={currentHousehold} type="text" value={household} onChange={e => setHousehold(e.target.value)} />
              </div>
              {/* <div className="form-field">
                <label htmlFor="mailSetting">Profile picture</label>
                <input id="mailSetting" type="file" checked={email} onChange={e => setFile(
                  // @ts-ignore
                  URL.createObjectURL(e.target.files[0])
                )} />
              </div> */}
              <div className="form-field email-settings">
                <label htmlFor="mailSetting">Yes, email me when my deadline is due</label>
                <input id="mailSetting" type="checkbox" checked={email} onChange={e => setEmail(!email)} />
              </div>
              <div className="form-footer">
                <button>Save settings</button>
              </div>
            </form>
          </div>
        :
        <Loading />
      }
      </div>
    </div>
  )
}
