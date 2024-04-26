## Openmesh Admin

This project contains the smart contract account (Openmesh Admin) which contains the Openmesh treasury (coins and tokens) and is granted important permissions.  
Furthermore, an abstract smart contract (Openmesh) is provided which will expose this Openmesh Admin smart account as a constant variable.  
As this smart account uses CREATE2 for deployment, its address will be consistent across chains.  
Lastly, an extension (OpenmeshReverseENSClaimable) of this abstract contract is provided, which allows the Openmesh Admin to claim the reverse ENS record for the smart contract.  

## Documentation

https://book.getfoundry.sh/

## Usage

### Build

```shell
forge build
```

### Test

```shell
forge test
```

### Deploy

```shell
make deploy
```

## Local chain

```shell
anvil
make local-fund ADDRESS="YOURADDRESSHERE"
```

### Analyze

```shell
make slither
make mythril TARGET=Counter.sol
```

### Help

```shell
forge --help
anvil --help
cast --help
```
