contract NewContract {
    uint public totalSupply;
    mapping (address => uint) balanceOf;
    address public migrationSource;
    address public owner;

    function NewContract(address _migrationSource) public {
        migrationSource = _migrationSource;
        owner = msg.sender;
    }

    function migrate(address [] _holders) public
        require(msg.sender == owner);
        for(uint i=0; i<_holders.length; ++i) {
            uint balance = ERC20base(_migrationSource).balanceOf(_holders[i]);
            balanceOf[_holders[i]] = balance;
            totalSupply += balance;
        }
    }
}
