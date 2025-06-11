import React from 'react'
import { __ } from '@wordpress/i18n'

// const { __ } = wp.i18n // this for translate, because '@wordpress/i18n' does not work to display the translate text

export const NoTasksFound = ({ message }) => {
  return (
    <div className="lsomab-menu-item lsomab-no-tasks-found">
      <div className="lsomab-menu-item-title">
        {message || __('No active tasks found', 'my-ai-bot')}
      </div>
    </div>
  )
}