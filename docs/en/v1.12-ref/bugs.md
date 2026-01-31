# v1.12 Ref - Bugs

## Compatibility Issues

### Windows 10

- Both the GOG and Steam versions are buggy on Windows 10 21H2. Saving game takes 5~10 seconds, but only about less than 2 seconds on Windows 7.

- GOG's JA2 is not compatible with NVIDIA GeForce Experience on Windows 10 21H2
  - The game becomes unresponsive to mouse input after pressing Alt+Z to open the GeForce Experience panel.
  - **Walk-around/Solution**:
    - repair the game via GOG
    - install the June 2010 DirectX runtime package from [GOG support](http://files.gog.com/support/Directx_Jun2010_redist.exe) or [Microsoft Download](https://www.microsoft.com/en-us/download/details.aspx?id=8109),
    - enable "Disable full screen optimization" and "Run as administrator" for the game's executable file
    - restart the game

- GOG's JA2 is not compatible with Windows Game Bar version 7.325.11061.0 on Windows 10 21H2.
  - It fails to capture or recording, only black screen.
