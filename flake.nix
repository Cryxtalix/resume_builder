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
        html-tidy
        htmldoc
        jsbeautifier
      ];
      shellHook = ''
        echo "Started Resume builder development environment..."
        export PS1='\[\e[1m\](Nix-shell)[ \[\e[96m\]\w \[\e[39m\]]\\$ \[\e[0m\]'

        format() {
          tidy -qmi main.html
          htmldoc main.html -f resume.pdf -t pdf14
        }

        generate() {
          htmldoc main.html -f resume.pdf -t pdf14
        }
      '';
    };
  };
}