pragma solidity ^0.4.18;
pragma experimental ABIEncoderV2;

contract Documents {
    
    struct Document {
        string Name;
        string Code;
    }
    
    mapping (string => Document) documents;
    string[] public documentAccts;
    
    function setDocument(bytes32[] doc) public {
        Document document = documents[bytes32ToString(doc[0])];
        document.Name = bytes32ToString(doc[0]);
        document.Code = bytes32ToString(doc[1]);
        
        documentAccts.push(bytes32ToString(doc[1])) - 1;
    }
    
    function bytes32ToString(bytes32 x) internal constant returns (string) {
        bytes memory bytesString = new bytes(32);
        uint charCount = 0;
        for (uint j = 0; j < 32; j++) {
            byte char = byte(bytes32(uint(x) * 2 ** (8 * j)));
            if (char != 0) {
                bytesString[charCount] = char;
                charCount++;
            }
        }
        bytes memory bytesStringTrimmed = new bytes(charCount);
        for (j = 0; j < charCount; j++) {
            bytesStringTrimmed[j] = bytesString[j];
        }
        return string(bytesStringTrimmed);
    }
    
    function getDocuments() view public returns(string[]) {
        return documentAccts;
    }
    
    function getDocument(string _address) view public returns (string, string) {
        return (documents[_address].Code, documents[_address].Name);
    }
    
    function countDocuments() view public returns (uint) {
        return documentAccts.length;
    }
    
}
