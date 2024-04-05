{
  description = "Resume builder";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs = { self, nixpkgs, ... }@inputs:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.${system};
    in
  {
    devShells.${system}.default = pkgs.mkShell {
      nativeBuildInputs = with pkgs; [
        chromium
      ];
      shellHook = ''
        echo "Started Resume builder development environment..."
        export PS1='\[\e[1m\](Nix-shell)[ \[\e[96m\]\w \[\e[39m\]]\\$ \[\e[0m\]'

        generate() {
          chromium --headless --no-pdf-header-footer --print-to-pdf="resume.pdf" main.html
        }
      '';
    };
  };
}