import { createContext, useState, ReactNode, useEffect } from 'react'

import {
  getLocalStorageState,
  setLocalStorageState
} from '@/utils/localStorage'
import { Settings } from 'src/themes/types'

const ITEM_LOCAL_STORAGE = 'settingsTheme'

export type SettingsContextValue = {
  settings: Settings
  saveSettings: (updatedSettings: Settings) => void
}

const defaultSettings: Settings = {
  navOpen: true,
  mode: 'dark',
  skin: 'default',
  drawerWidth: 260
}

export const SettingsThemeContext = createContext<SettingsContextValue>({
  settings: defaultSettings,
  saveSettings: () => null
})

export const SettingsThemeProvider = ({
  children
}: {
  children: ReactNode
}) => {
  const [settings, setSettings] = useState<Settings>({ ...defaultSettings })
  const initialSettings = getLocalStorageState<Settings>(
    ITEM_LOCAL_STORAGE,
    defaultSettings
  )

  useEffect(() => {
    if (initialSettings) {
      setSettings({ ...initialSettings })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const saveSettings = (updatedSettings: Settings) => {
    setLocalStorageState(ITEM_LOCAL_STORAGE, updatedSettings)
    setSettings(updatedSettings)
  }

  return (
    <SettingsThemeContext.Provider value={{ saveSettings, settings }}>
      {children}
    </SettingsThemeContext.Provider>
  )
}

export const SettingsConsumer = SettingsThemeContext.Consumer
