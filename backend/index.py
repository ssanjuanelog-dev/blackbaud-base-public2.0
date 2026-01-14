from web3 import Web3
w3 = Web3(Web3.HTTPProvider("http://127.0.0.1:8545"))
def get_balance(contract_addr: str, wallet: str) -> int:
    contract = w3.eth.contract(
        address=Web3.to_checksum_address(contract_addr),
        abi=[{"constant":True,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"type":"function"}]
    )
    return contract.functions.balanceOf(Web3.to_checksum_address(wallet)).call()
