import React from 'react';
import './CourseInfo.scss'

const CourseInfoTable = () => {
  return (
    <div class="table-container container">
      <div class="table-responsive">
        <table class="comparison-table">
          <thead>
            <tr>
              <th><strong>Feature</strong></th>
              <th><strong>PRO</strong></th>
              <th><strong>Free</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>General Features</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Unlimited Popups</td>
              <td class="-include"></td>
              <td class="-include"></td>
            </tr>
            <tr>
              <td>HTML Content Editor</td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Popup Shortcodes</summary>
                  <ul>
                    <li><code>videoBox</code>: Embed a video from YouTube or Vimeo directly into your modal.
                    </li>
                    <li><code>buttonBox</code>: Create a button with a custom link or a close button for the
                      modal.
                    </li>
                    <li><code>iframeBox</code>: Insert any iframe content, such as a PDF file or a map, within
                      the modal.
                    </li>
                  </ul>
                </details>
              </td>
              <td class="-include"></td>
              <td class="-include"></td>
            </tr>
            <tr>
              <td><strong><i class="fa-regular fa-pen-to-square"></i> Styling Options</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Popup Style</td>
              <td class="-include"></td>
              <td class="-include"></td>
            </tr>
            <tr>
              <td>Popup Close Button Styling</td>
              <td class="-include"></td>
              <td class="-include"></td>
            </tr>
            <tr>
              <td><strong>Triggers and Animations</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Open Triggers</td>
              <td>Click, Auto, Hover, Exit, Scrolled,
                <span class="is-diff">Right Click, Text Selected, Loop</span></td>
              <td>Click, Auto, Scrolled</td>
            </tr>

            <tr>
              <td><details><summary>Open/Close Custom Selectors</summary>
                Add custom selectors to open or close the popup, providing greater flexibility and control over
                modal interactions.
              </details></td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>

            <tr>
              <td><strong>Closing Options</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Closing Popup</td>
              <td>Overlay, Esc, <span class="is-diff">Auto-Close, Form Submission, </span></td>
              <td>Overlay, Esc</td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Remove Close Button</summary>
                  Option to remove the close button from the popup, ensuring users focus on the content or
                  take a required action.
                </details>
              </td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Close Button Delay</summary>
                  Set a delay before the close button appears on the popup, ensuring users have ample time
                  to view the content.
                </details>
              </td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Redirect after Close</summary>
                  Redirect users to a specific URL after the popup is closed, guiding them to additional
                  content or offers.
                </details>
              </td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><strong>Advanced Features</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Video Support</summary>
                  Popup Box Pro seamlessly integrates with videos from Youtube and Vimeo, offering
                  user-friendly playback controls
                </details>
              </td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Google Event Tracking</summary>
                  Gain valuable insights into user engagement with your modals by integrating Google Analytics
                  event tracking. This allows you to monitor how often modals are opened and closed, helping you
                  optimize their effectiveness.
                </details>
              </td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><strong>Display and Visibility Rules</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Display Rules</summary>
                  Multi Display Rules - Add several Display Rules to control exactly where your popup
                  appear using shortcodes, page types, post categories/tags, author pages, date archives and more.
                  <a href="https://wow-estore.com/documentations/popup-box-pro-documentation/#doc-section-80756">Read More</a>
                </details>
              </td>
              <td><span class="is-diff">Multi Display Rules</span></td>
              <td>Limited Display Rules</td>
            </tr>
            <tr>
              <td>Responsive Visibility</td>
              <td>Remove on Mobile, Remove on Desktop</td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><strong>Targeting and Scheduling</strong></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>Permissions of Users</summary>
                  Set specific permissions for displaying popups based on user roles. Customize which user groups
                  (e.g., Administrators, Editors, Authors) can view or interact with your popups, ensuring
                  relevant content reaches the appropriate audience.
                </details>
              </td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><details><summary>URL has param</summary>
                Trigger the popup to open if the URL contains a specific parameter, such as modal=active, allowing
                targeted content delivery based on URL parameters.

              </details></td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><details><summary>Referrer URL</summary>
                Customize popup experiences for visitors arriving from specific websites, such as displaying a welcome message for users coming from a partner site.

              </details></td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><details><summary>Geotargeting</summary>
                Show popups based on the geographic location of your website visitors, enhancing targeted engagement by tailoring content to regional audiences.

              </details></td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><details><summary>Enable for Specific Language</summary>
                Restrict modal visibility to users with a specific language setting, ensuring that the content is relevant and understandable for the intended audience.

              </details></td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><details><summary>Schedule</summary>
                Control when your popups appear by scheduling them based on specific days, times, or dates. This allows you to plan and promote time-sensitive events or campaigns effectively, ensuring your messages reach users at the optimal moment.

              </details></td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td><details><summary>Hide Based on Browser</summary>
                Customize the visibility of your popups depending on the user's browser. Selectively hide modals for specific browsers to ensure compatibility and enhance user experience across different web environments.

              </details></td>
              <td class="-include"></td>
              <td class="-exclude"></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default CourseInfoTable