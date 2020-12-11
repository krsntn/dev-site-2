---
title: 'MacOS'
featuredImage: './cover.jpg'
---

# .macos

```bash

#!/usr/bin/env bash

# ~/.macos — https://mths.be/macos

# Close any open System Preferences panes, to prevent them from overriding
# settings we’re about to change
osascript -e 'tell application "System Preferences" to quit'

# Ask for the administrator password upfront
sudo -v

# Keep-alive: update existing `sudo` time stamp until `.macos` has finished
while true; do sudo -n true; sleep 60; kill -0 "$$" || exit; done 2>/dev/null &

###############################################################################
# NVM                                                                         #
###############################################################################

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

###############################################################################
# Homebrew                                                                    #
###############################################################################
# install homebrew https://brew.sh
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# brew formulae
brew install node zsh git yarn heroku \

# brew cask
brew cask install alfred google-chrome firefox visual-studio-code \
discord spotify qmoji fork the-unarchiver iterm2 \

###############################################################################
# keyboard  #
###############################################################################

# Enable full keyboard access for all controls
# (e.g. enable Tab in modal dialogs)
defaults write NSGlobalDomain AppleKeyboardUIMode -int 2

# Disable automatic capitalization as it’s annoying when typing code
defaults write NSGlobalDomain NSAutomaticCapitalizationEnabled -bool false

# Disable smart dashes as they’re annoying when typing code
defaults write NSGlobalDomain NSAutomaticDashSubstitutionEnabled -bool false

# Disable automatic period substitution as it’s annoying when typing code
defaults write NSGlobalDomain NSAutomaticPeriodSubstitutionEnabled -bool false

# Disable smart quotes as they’re annoying when typing code
defaults write NSGlobalDomain NSAutomaticQuoteSubstitutionEnabled -bool false

# Disable auto-correct
defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false

# Disable press-and-hold for keys in favor of key repeat
defaults write NSGlobalDomain ApplePressAndHoldEnabled -bool false

# Set a blazingly fast keyboard repeat rate
defaults write NSGlobalDomain KeyRepeat -int 1
defaults write NSGlobalDomain InitialKeyRepeat -int 12

###############################################################################
# Screen                                                                      #
###############################################################################

# Require password immediately after sleep or screen saver begins
defaults write com.apple.screensaver askForPassword -int 1
defaults write com.apple.screensaver askForPasswordDelay -int 0

# Save screenshots to the desktop
defaults write com.apple.screencapture location -string "${HOME}/Desktop"

# Save screenshots in PNG format (other options: BMP, GIF, JPG, PDF, TIFF)
defaults write com.apple.screencapture type -string "png"

###############################################################################
# Finder                                                                      #
###############################################################################

# Finder: allow quitting via ⌘ + Q; doing so will also hide desktop icons
defaults write com.apple.finder QuitMenuItem -bool true

# Set Downloads as the default location for new Finder windows
# For other paths, use `PfLo` and `file:///full/path/here/`
defaults write com.apple.finder NewWindowTarget -string "PfLo"
defaults write com.apple.finder NewWindowTargetPath -string "file://${HOME}/Downloads/"

# Show icons for hard drives, servers, and removable media on the desktop
defaults write com.apple.finder ShowExternalHardDrivesOnDesktop -bool true
defaults write com.apple.finder ShowHardDrivesOnDesktop -bool false
defaults write com.apple.finder ShowMountedServersOnDesktop -bool false
defaults write com.apple.finder ShowRemovableMediaOnDesktop -bool true

# Finder: show hidden files by default
defaults write com.apple.finder AppleShowAllFiles -bool true

# Finder: show all filename extensions
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Finder: show status bar
defaults write com.apple.finder ShowStatusBar -bool true

# Finder: show path bar
defaults write com.apple.finder ShowPathbar -bool true

# Display full POSIX path as Finder window title
defaults write com.apple.finder _FXShowPosixPathInTitle -bool true

# Keep folders on top when sorting by name
defaults write com.apple.finder _FXSortFoldersFirst -bool true

# When performing a search, search the current folder by default
defaults write com.apple.finder FXDefaultSearchScope -string "SCcf"

# Enable spring loading for directories
defaults write NSGlobalDomain com.apple.springing.enabled -bool true

# Reduce the spring loading delay for directories
defaults write NSGlobalDomain com.apple.springing.delay -float 0.2

# Avoid creating .DS_Store files on network or USB volumes
defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool true
defaults write com.apple.desktopservices DSDontWriteUSBStores -bool true

# Disable disk image verification
#defaults write com.apple.frameworks.diskimages skip-verify -bool true
#defaults write com.apple.frameworks.diskimages skip-verify-locked -bool true
#defaults write com.apple.frameworks.diskimages skip-verify-remote -bool true

# Automatically open a new Finder window when a volume is mounted
defaults write com.apple.frameworks.diskimages auto-open-ro-root -bool true
defaults write com.apple.frameworks.diskimages auto-open-rw-root -bool true
defaults write com.apple.finder OpenWindowForNewRemovableDisk -bool true

# Use column view in all Finder windows by default
# Four-letter codes for the other view modes: `icnv`, `clmv`, `Flwv`, `Nlsv`
defaults write com.apple.finder FXPreferredViewStyle -string "clmv"

# Show the ~/Library folder
chflags nohidden ~/Library

# Show the /Volumes folder
sudo chflags nohidden /Volumes

###############################################################################
# Dock, Dashboard, and hot corners                                            #
###############################################################################

# Set the icon size of Dock items to 26 pixels
defaults write com.apple.dock tilesize -int 26

# Change minimize/maximize window effect
defaults write com.apple.dock mineffect -string "scale"

# Minimize windows into their application’s icon
#defaults write com.apple.dock minimize-to-application -bool true

# Enable spring loading for all Dock items
defaults write com.apple.dock enable-spring-load-actions-on-all-items -bool true

# Show indicator lights for open applications in the Dock
defaults write com.apple.dock show-process-indicators -bool tru

# Don’t animate opening applications from the Dock
defaults write com.apple.dock launchanim -bool falsee

# Automatically hide and show the Dock
defaults write com.apple.dock autohide -bool true

# Make Dock icons of hidden applications translucent
defaults write com.apple.dock showhidden -bool true

# Auto-hide delay of the Dock
defaults write com.apple.dock autohide-delay -int 0

# Auto-hide time modifier of the Dock
defaults write com.apple.dock autohide-time-modifier -float 0.25

# Disable show recent apps
defaults write com.apple.dock show-recents -int 0

# Speed up Mission Control animations
defaults write com.apple.dock expose-animation-duration -float 0.1

# Disable the Launchpad gesture (pinch with thumb and three fingers)
defaults write com.apple.dock showLaunchpadGestureEnabled -int 0

###############################################################################
# Messages                                                                    #
###############################################################################

# Disable automatic emoji substitution (i.e. use plain text smileys)
defaults write com.apple.messageshelper.MessageController SOInputLineSettings -dict-add "automaticEmojiSubstitutionEnablediMessage" -bool false

# Disable smart quotes as it’s annoying for messages that contain code
defaults write com.apple.messageshelper.MessageController SOInputLineSettings -dict-add "automaticQuoteSubstitutionEnabled" -bool false

###############################################################################
# Kill affected applications                                                  #
###############################################################################

for app in "Activity Monitor" \
  "Address Book" \
  "Calendar" \
  "cfprefsd" \
  "Contacts" \
  "Dock" \
  "Finder" \
  "Mail" \
  "Messages" \
  "Photos" \
  "Safari" \
  "SystemUIServer" \
  "iCal"; do
  killall "${app}" &> /dev/null
done
echo "Done. Note that some of these changes require a logout/restart to take effect."

```
