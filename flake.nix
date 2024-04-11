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
        nodejs_21
        python3
      ];
      shellHook = ''
        export PS1='\[\e[1m\](Nix-shell)[ \[\e[96m\]\w \[\e[39m\]]\\$ \[\e[0m\]'
        npm install

        alias generate="python generate.py"

        echo "Started Resume builder development environment..."
      '';
    };
  };
}