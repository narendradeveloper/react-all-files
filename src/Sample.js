
import "./sample.css"


function Sample (){
    return ( 
    <div className="master">
    <h1 className="header">11R Batch</h1>
    <h3 className="secondheader">time table</h3>
    <table className="body">
    <td id="body1">
       <th id="head1">timing</th> 
       <tr className="head2">Monday</tr>
       <tr className="head2">tuesday</tr>
       <tr className="head2">wednesday</tr>
       <tr className="head2">thursday</tr>
       <tr className="head2">freiday</tr>
       <tr className="head2">saturday</tr>
    </td>
    <td id="body2">
    <th className="secondbody">10.00-11.00</th>
    <tr className="hii">problem solving</tr>
    <tr className="hii">problem solving</tr>
    <tr className="hii">problem solving</tr>
    <tr className="hii1">communication</tr>
    <tr className="hii1">communication</tr>
    <tr className="hii1">communication</tr>
    </td>
    <td id="body3">
    <th id="head1">11.30-01.00</th>
    <tr className="sr">communication</tr>
    <tr className="sr1">communication</tr>
    <tr className="sr2">communication</tr>
    <tr className="sr3">problem solving</tr>
    <tr className="sr4">problem solving</tr>
    <tr className="sr5">problem solving</tr>
    </td>
    <td id="">
        <th id="head1">2.00-4.00</th>
        <tr className="tech">technical</tr>
        <tr className="tech">technical</tr>
        <tr className="tech">technical</tr>
        <tr className="tech">technical</tr>
        <tr className="tech">technical</tr>
        <tr className="tech">technical</tr>
    </td>
    <td id="footer">
        <th id="head1">4.00-5.00</th> 
        <tr className="footer1">aptitude</tr>
        <tr className="footer2">aptitude</tr>
        <tr className="footer3">aptitude</tr>
        <tr className="footer4">aptitude</tr>
        <tr className="footer5">aptitude</tr>
        <tr className="footer6">aptitude</tr>
    </td>
    </table>
    </div>
    )

}
export  default Sample;